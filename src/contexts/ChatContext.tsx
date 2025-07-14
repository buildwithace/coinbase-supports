import { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  userId?: string;
  userName?: string;
}

interface ChatUser {
  id: string;
  name: string;
  email: string;
  isOnline: boolean;
  lastSeen: Date;
  unreadCount: number;
}

interface ChatContextType {
  messages: Message[];
  users: ChatUser[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => void;
  addAdminReply: (text: string, replyToId?: string) => void;
  markAsRead: (messageId: string) => void;
  addUser: (user: Omit<ChatUser, 'id' | 'lastSeen' | 'unreadCount'>) => void;
  updateUserStatus: (userId: string, isOnline: boolean) => void;
  getUnreadCount: () => number;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Coinbase Support Pro. I am here to assist you with any account issues, trading problems, or security concerns. How can I help you today?',
      sender: 'admin',
      timestamp: new Date(),
      status: 'delivered'
    }
  ]);

  const [users, setUsers] = useState<ChatUser[]>([]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date(),
      status: 'sent'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addAdminReply = (text: string, replyToId?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'admin',
      timestamp: new Date(),
      status: 'delivered'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, status: 'read' } : msg
      )
    );
  };

  const addUser = (user: Omit<ChatUser, 'id' | 'lastSeen' | 'unreadCount'>) => {
    const newUser: ChatUser = {
      ...user,
      id: Date.now().toString(),
      lastSeen: new Date(),
      unreadCount: 0
    };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUserStatus = (userId: string, isOnline: boolean) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === userId 
          ? { ...user, isOnline, lastSeen: new Date() }
          : user
      )
    );
  };

  const getUnreadCount = () => {
    return messages.filter(msg => msg.sender === 'user' && msg.status !== 'read').length;
  };

  return (
    <ChatContext.Provider value={{
      messages,
      users,
      addMessage,
      addAdminReply,
      markAsRead,
      addUser,
      updateUserStatus,
      getUnreadCount
    }}>
      {children}
    </ChatContext.Provider>
  );
};