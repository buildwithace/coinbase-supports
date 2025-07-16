import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  userId?: string;
  userName?: string;
  sessionId?: string;
}

interface ChatUser {
  id: string;
  name: string;
  email: string;
  isOnline: boolean;
  lastSeen: Date;
  unreadCount: number;
  sessionId: string;
}

interface ChatContextType {
  messages: Message[];
  users: ChatUser[];
  currentSessionId: string;
  addMessage: (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => Promise<void>;
  addAdminReply: (text: string, replyToId?: string) => Promise<void>;
  markAsRead: (messageId: string) => Promise<void>;
  addUser: (user: Omit<ChatUser, 'id' | 'lastSeen' | 'unreadCount'>) => Promise<void>;
  updateUserStatus: (userId: string, isOnline: boolean) => Promise<void>;
  getUnreadCount: () => number;
  initializeSession: (name?: string, email?: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

// Generate a unique session ID for anonymous users
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize session on mount
  useEffect(() => {
    initializeSession();
  }, []);

  // Set up real-time subscriptions
  useEffect(() => {
    if (!currentSessionId) return;

    // Subscribe to message changes
    const messagesChannel = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${currentSessionId}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newMessage = payload.new as any;
            setMessages(prev => [...prev, {
              id: newMessage.id,
              text: newMessage.text,
              sender: newMessage.sender,
              timestamp: new Date(newMessage.created_at),
              status: newMessage.status,
              sessionId: newMessage.session_id
            }]);
          } else if (payload.eventType === 'UPDATE') {
            const updatedMessage = payload.new as any;
            setMessages(prev => prev.map(msg => 
              msg.id === updatedMessage.id 
                ? { ...msg, status: updatedMessage.status }
                : msg
            ));
          }
        }
      )
      .subscribe();

    // Subscribe to session changes
    const sessionsChannel = supabase
      .channel('chat-sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat_sessions'
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const sessionData = payload.new as any;
            setUsers(prev => {
              const existingIndex = prev.findIndex(u => u.sessionId === sessionData.session_id);
              const user: ChatUser = {
                id: sessionData.id,
                name: sessionData.name || 'Anonymous User',
                email: sessionData.email || '',
                isOnline: sessionData.is_online,
                lastSeen: new Date(sessionData.last_seen),
                unreadCount: 0,
                sessionId: sessionData.session_id
              };
              
              if (existingIndex >= 0) {
                const newUsers = [...prev];
                newUsers[existingIndex] = user;
                return newUsers;
              } else {
                return [...prev, user];
              }
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(sessionsChannel);
    };
  }, [currentSessionId]);

  const initializeSession = async (name?: string, email?: string) => {
    if (isInitialized) return;

    // Check if we have an existing session ID in localStorage
    let sessionId = localStorage.getItem('chat_session_id');
    
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem('chat_session_id', sessionId);
    }

    setCurrentSessionId(sessionId);

    try {
      // Check if session already exists
      const { data: existingSession } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('session_id', sessionId)
        .single();

      if (!existingSession) {
        // Create new session
        await supabase.from('chat_sessions').insert({
          session_id: sessionId,
          name: name || 'Anonymous User',
          email: email || '',
          is_online: true
        });

        // Add welcome message
        await supabase.from('chat_messages').insert({
          session_id: sessionId,
          text: 'Hello! Welcome to Coinbase Support Pro. I am here to assist you with any account issues, trading problems, or security concerns. How can I help you today?',
          sender: 'admin',
          status: 'delivered'
        });
      } else {
        // Update existing session to online
        await supabase
          .from('chat_sessions')
          .update({ 
            is_online: true, 
            last_seen: new Date().toISOString(),
            ...(name && { name }),
            ...(email && { email })
          })
          .eq('session_id', sessionId);
      }

      // Load existing messages
      const { data: messagesData } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (messagesData) {
        setMessages(messagesData.map(msg => ({
          id: msg.id,
          text: msg.text,
          sender: msg.sender as 'user' | 'admin',
          timestamp: new Date(msg.created_at),
          status: msg.status as 'sent' | 'delivered' | 'read',
          sessionId: msg.session_id
        })));
      }

      // Load active sessions
      const { data: sessionsData } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('is_online', true);

      if (sessionsData) {
        setUsers(sessionsData.map(session => ({
          id: session.id,
          name: session.name || 'Anonymous User',
          email: session.email || '',
          isOnline: session.is_online,
          lastSeen: new Date(session.last_seen),
          unreadCount: 0,
          sessionId: session.session_id
        })));
      }

      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing chat session:', error);
    }
  };

  const addMessage = async (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => {
    if (!currentSessionId) return;

    try {
      await supabase.from('chat_messages').insert({
        session_id: currentSessionId,
        text: message.text,
        sender: message.sender,
        status: 'sent'
      });
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const addAdminReply = async (text: string, replyToId?: string) => {
    if (!currentSessionId) return;

    try {
      await supabase.from('chat_messages').insert({
        session_id: currentSessionId,
        text,
        sender: 'admin',
        status: 'delivered',
        reply_to_id: replyToId || null
      });
    } catch (error) {
      console.error('Error adding admin reply:', error);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await supabase
        .from('chat_messages')
        .update({ status: 'read' })
        .eq('id', messageId);
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const addUser = async (user: Omit<ChatUser, 'id' | 'lastSeen' | 'unreadCount'>) => {
    try {
      await supabase.from('chat_sessions').insert({
        session_id: user.sessionId,
        name: user.name,
        email: user.email,
        is_online: user.isOnline
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUserStatus = async (sessionId: string, isOnline: boolean) => {
    try {
      await supabase
        .from('chat_sessions')
        .update({ 
          is_online: isOnline, 
          last_seen: new Date().toISOString() 
        })
        .eq('session_id', sessionId);
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const getUnreadCount = () => {
    return messages.filter(msg => msg.sender === 'user' && msg.status !== 'read').length;
  };

  // Update session to offline when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentSessionId) {
        // Use sendBeacon for reliability when page is unloading
        navigator.sendBeacon('/api/offline', JSON.stringify({ sessionId: currentSessionId }));
      }
    };

    const handleVisibilityChange = () => {
      if (currentSessionId) {
        updateUserStatus(currentSessionId, !document.hidden);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentSessionId]);

  return (
    <ChatContext.Provider value={{
      messages,
      users,
      currentSessionId,
      addMessage,
      addAdminReply,
      markAsRead,
      addUser,
      updateUserStatus,
      getUnreadCount,
      initializeSession
    }}>
      {children}
    </ChatContext.Provider>
  );
};