import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, MessageCircle, User, Bot, CheckCheck, Clock, Smile, Paperclip, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useChatContext } from "@/contexts/ChatContext";

const LiveChat = () => {
  const { messages, addMessage } = useChatContext();
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline] = useState(true);
  const [currentUser] = useState({ name: "Guest User", id: "guest-1" });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      addMessage({
        text: newMessage,
        sender: "user",
        userId: currentUser.id,
        userName: currentUser.name
      });

      setNewMessage("");
      setIsTyping(true);

      // Simulate admin response with typing indicator
      setTimeout(() => {
        setIsTyping(false);
        
        const responses = [
          "Thank you for reaching out! I'm reviewing your query and will provide a detailed response shortly. For urgent account issues, please also submit a ticket through our contact form.",
          "I understand your concern. Let me check your account details and provide you with the best solution. This may take a moment.",
          "That's a great question! I'm gathering the most current information to give you an accurate answer. Please hold on.",
          "I see what you're experiencing. This is a common issue that we can resolve quickly. Let me walk you through the steps.",
          "Your security is our priority. I'm verifying your account status and will provide secure assistance immediately."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        addMessage({
          text: randomResponse,
          sender: "admin"
        });
      }, 2000 + Math.random() * 2000);

      toast({
        title: "Message sent",
        description: "Our support team will respond shortly."
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <Clock className="w-3 h-3 text-muted-foreground" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-muted-foreground" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id="live-chat" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glass opacity-30" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-glow/5 rounded-full animate-pulse-slow blur-xl" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <MessageCircle className="w-16 h-16 text-primary mx-auto animate-glow" />
              <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-scale-pulse mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Advanced Live Chat
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect instantly with our expert support team. Get real-time assistance with intelligent responses and priority handling.
            </p>
          </div>

          <Card className="shadow-deep border-border/30 backdrop-blur-sm bg-card/80 overflow-hidden">
            <CardHeader className="border-b border-border/50 bg-gradient-card">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
                  </div>
                  <div>
                    <span className="text-lg font-bold">Coinbase Support Chat</span>
                    <p className="text-sm text-muted-foreground font-normal">Professional • Secure • Instant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={isOnline ? "default" : "secondary"} className="animate-pulse">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-success' : 'bg-muted'} mr-2`} />
                    {isOnline ? 'Expert Online' : 'Offline'}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    Response time: &lt; 30 seconds
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Enhanced Messages Area */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-background/50 to-accent/20">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-4 animate-fade-in ${
                      message.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-soft ${
                      message.sender === "user" 
                        ? "bg-gradient-primary text-primary-foreground" 
                        : "bg-gradient-card text-primary border-2 border-primary/20"
                    }`}>
                      {message.sender === "user" ? (
                        <User className="w-5 h-5" />
                      ) : (
                        <Bot className="w-5 h-5" />
                      )}
                    </div>
                    
                    <div className={`max-w-md lg:max-w-lg ${
                      message.sender === "user" ? "text-right" : "text-left"
                    }`}>
                      <div className={`px-6 py-4 rounded-2xl shadow-card backdrop-blur-sm border ${
                        message.sender === "user"
                          ? "bg-gradient-primary text-primary-foreground border-primary/30"
                          : "bg-card/80 text-card-foreground border-border/50"
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                      
                      <div className={`flex items-center gap-2 mt-2 text-xs text-muted-foreground ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}>
                        <span>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                        {message.sender === "user" && getStatusIcon(message.status)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-4 animate-fade-in">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-card text-primary border-2 border-primary/20 shadow-soft">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-card border border-border/50">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:200ms]" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:400ms]" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Enhanced Input Area */}
              <div className="border-t border-border/50 p-6 bg-gradient-card backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message... (Press Enter to send)"
                      className="pr-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                  
                  <Button 
                    onClick={handleSendMessage}
                    variant="default"
                    size="icon"
                    disabled={!newMessage.trim()}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>🔒 End-to-end encrypted • Secure chat</span>
                  <span>Expert support team online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;