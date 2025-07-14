import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Lock, Users, MessageSquare, Settings, Eye, TrendingUp, Activity, Bell, Search, Filter, Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useChatContext } from "@/contexts/ChatContext";
import Header from "@/components/Header";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCode, setLoginCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { messages, users, getUnreadCount, addAdminReply, markAsRead } = useChatContext();
  const { toast } = useToast();

  const correctCode = "uC943YpKhpd8";
  const unreadCount = getUnreadCount();

  const handleSendReply = () => {
    if (replyText.trim()) {
      addAdminReply(replyText);
      setReplyText("");
      setReplyingTo(null);
      toast({
        title: "Reply sent",
        description: "Your response has been sent successfully."
      });
    }
  };

  const handleMarkAsRead = (messageId: string) => {
    markAsRead(messageId);
    toast({
      title: "Message marked as read",
      description: "The message status has been updated."
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (loginCode === correctCode) {
        setIsAuthenticated(true);
        toast({
          title: "Access granted",
          description: "Welcome to the advanced admin panel."
        });
      } else {
        toast({
          title: "Access denied",
          description: "Invalid authorization code.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const mockTickets = [
    { id: "001", name: "John Smith", email: "john@email.com", issue: "Account Access", priority: "High", status: "Open", time: "2 hours ago" },
    { id: "002", name: "Sarah Johnson", email: "sarah@email.com", issue: "Trading Issues", priority: "Medium", status: "In Progress", time: "4 hours ago" },
    { id: "003", name: "Mike Chen", email: "mike@email.com", issue: "Security Concerns", priority: "Urgent", status: "Open", time: "1 hour ago" },
    { id: "004", name: "Emma Davis", email: "emma@email.com", issue: "Payment Problems", priority: "Low", status: "Resolved", time: "6 hours ago" },
    { id: "005", name: "Alex Rodriguez", email: "alex@email.com", issue: "Verification", priority: "Medium", status: "In Progress", time: "3 hours ago" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
        <Header />
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glass opacity-40" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full animate-pulse-slow blur-xl" />
        
        <main className="relative pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="shadow-deep border-border/30 backdrop-blur-md bg-card/80">
                <CardHeader className="text-center bg-gradient-card">
                  <div className="relative inline-block mb-6">
                    <Shield className="w-16 h-16 text-primary mx-auto animate-glow" />
                    <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-scale-pulse mx-auto" />
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    Admin Panel Access
                  </CardTitle>
                  <p className="text-muted-foreground">Enter authorization code to continue</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Authorization Code
                      </label>
                      <Input
                        type="password"
                        value={loginCode}
                        onChange={(e) => setLoginCode(e.target.value)}
                        placeholder="Enter admin code"
                        required
                        className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="professional" 
                      className="w-full h-12 text-lg"
                      disabled={isLoading}
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      {isLoading ? "Verifying..." : "Access Admin Panel"}
                    </Button>
                  </form>
                  
                  <div className="mt-8 p-6 bg-accent/50 backdrop-blur-sm rounded-lg border border-border/30">
                    <p className="text-sm text-accent-foreground">
                      <strong>Demo Note:</strong> This admin panel is visible to demonstrate functionality. 
                      In production, this would be on a secure subdomain with proper authentication.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glass opacity-20" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float blur-2xl" />
      
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    Advanced Dashboard
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">Manage support operations with real-time insights</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input placeholder="Search..." className="w-64" />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAuthenticated(false)}
                >
                  Logout
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-card backdrop-blur-sm bg-card/80 border-border/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Tickets</p>
                      <p className="text-3xl font-bold text-primary">{mockTickets.length}</p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card backdrop-blur-sm bg-card/80 border-border/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Unread Messages</p>
                      <p className="text-3xl font-bold text-destructive">{unreadCount}</p>
                    </div>
                    <Bell className="w-8 h-8 text-destructive/50" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card backdrop-blur-sm bg-card/80 border-border/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Users</p>
                      <p className="text-3xl font-bold text-success">{users.filter(u => u.isOnline).length + 1}</p>
                    </div>
                    <Users className="w-8 h-8 text-success/50" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card backdrop-blur-sm bg-card/80 border-border/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Response Rate</p>
                      <p className="text-3xl font-bold text-primary">99.8%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="tickets" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-14 bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="tickets" className="flex items-center gap-2 text-lg h-12">
                  <MessageSquare className="w-5 h-5" />
                  Support Tickets
                </TabsTrigger>
                <TabsTrigger value="chats" className="flex items-center gap-2 text-lg h-12">
                  <Users className="w-5 h-5" />
                  Live Chats ({messages.length})
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2 text-lg h-12">
                  <Settings className="w-5 h-5" />
                  System Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tickets">
                <Card className="shadow-deep backdrop-blur-sm bg-card/80 border-border/30">
                  <CardHeader className="bg-gradient-card">
                    <CardTitle className="text-2xl">Support Tickets Management</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {mockTickets.map((ticket, index) => (
                        <div 
                          key={ticket.id} 
                          className="p-6 hover:bg-accent/30 transition-all duration-300 border-b border-border/30 last:border-b-0 animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-3">
                                <span className="font-bold text-lg">#{ticket.id}</span>
                                <span className="text-foreground font-medium">{ticket.name}</span>
                                <Badge 
                                  variant={
                                    ticket.priority === "Urgent" ? "destructive" : 
                                    ticket.priority === "High" ? "destructive" :
                                    ticket.priority === "Medium" ? "default" : "secondary"
                                  }
                                  className="animate-pulse"
                                >
                                  {ticket.priority}
                                </Badge>
                                <Badge 
                                  variant={ticket.status === "Open" ? "default" : ticket.status === "Resolved" ? "secondary" : "outline"}
                                >
                                  {ticket.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">{ticket.email}</p>
                              <p className="text-sm font-medium text-foreground mb-1">{ticket.issue}</p>
                              <p className="text-xs text-muted-foreground">{ticket.time}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                              <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow">
                                <Activity className="w-4 h-4 mr-2" />
                                Respond
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chats">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Messages List */}
                  <div className="lg:col-span-2">
                    <Card className="shadow-deep backdrop-blur-sm bg-card/80 border-border/30">
                      <CardHeader className="bg-gradient-card">
                        <CardTitle className="text-2xl flex items-center justify-between">
                          <span>Live Chat Messages</span>
                          <Badge variant="default" className="animate-pulse">
                            {messages.length} Messages
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                          {messages.map((message, index) => (
                            <div 
                              key={message.id} 
                              className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-soft animate-fade-in ${
                                message.sender === "user" 
                                  ? "bg-primary/10 border-primary/30" 
                                  : "bg-accent/50 border-border/50"
                              }`}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    message.sender === "user" 
                                      ? "bg-primary text-primary-foreground" 
                                      : "bg-accent text-accent-foreground"
                                  }`}>
                                    {message.sender === "user" ? (
                                      <User className="w-4 h-4" />
                                    ) : (
                                      <Bot className="w-4 h-4" />
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge 
                                      variant={message.sender === "user" ? "default" : "secondary"}
                                      className="text-xs"
                                    >
                                      {message.sender === "user" ? "User" : "Admin"}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">
                                      {message.timestamp.toLocaleString()}
                                    </span>
                                    {message.sender === "user" && message.status !== "read" && (
                                      <Badge variant="destructive" className="text-xs animate-pulse">
                                        Unread
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  {message.sender === "user" && message.status !== "read" && (
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="text-xs"
                                      onClick={() => handleMarkAsRead(message.id)}
                                    >
                                      Mark Read
                                    </Button>
                                  )}
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="text-xs"
                                    onClick={() => setReplyingTo(message.id)}
                                  >
                                    Reply
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-foreground pl-11">{message.text}</p>
                            </div>
                          ))}
                          {messages.length === 0 && (
                            <div className="text-center py-8 text-muted-foreground">
                              No messages yet. Chat messages will appear here in real-time.
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Reply Panel */}
                  <div className="lg:col-span-1">
                    <Card className="shadow-deep backdrop-blur-sm bg-card/80 border-border/30">
                      <CardHeader className="bg-gradient-card">
                        <CardTitle className="text-xl">Quick Reply</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Reply Message
                            </label>
                            <Textarea
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Type your reply..."
                              className="min-h-[100px] resize-none"
                            />
                          </div>
                          <Button 
                            onClick={handleSendReply}
                            disabled={!replyText.trim()}
                            className="w-full bg-gradient-primary hover:shadow-glow"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Reply
                          </Button>
                          
                          {/* Quick Response Templates */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Quick Templates:</h4>
                            <div className="space-y-1">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full justify-start text-xs"
                                onClick={() => setReplyText("Thank you for contacting Coinbase Support. I'm reviewing your case and will provide assistance shortly.")}
                              >
                                Standard Response
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full justify-start text-xs"
                                onClick={() => setReplyText("I understand your concern about account security. Let me help you resolve this issue immediately.")}
                              >
                                Security Issue
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full justify-start text-xs"
                                onClick={() => setReplyText("For trading-related questions, I'll need to verify your account details. Please provide your account email for verification.")}
                              >
                                Trading Help
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="shadow-deep backdrop-blur-sm bg-card/80 border-border/30">
                    <CardHeader className="bg-gradient-card">
                      <CardTitle className="text-xl">System Status</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                        <span className="font-medium">Live Chat System</span>
                        <Badge className="bg-success text-success-foreground animate-pulse">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                        <span className="font-medium">Email Notifications</span>
                        <Badge className="bg-success text-success-foreground animate-pulse">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                        <span className="font-medium">Auto-responses</span>
                        <Badge className="bg-success text-success-foreground animate-pulse">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                        <span className="font-medium">Security Level</span>
                        <Badge className="bg-primary text-primary-foreground">Maximum</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-deep backdrop-blur-sm bg-card/80 border-border/30">
                    <CardHeader className="bg-gradient-card">
                      <CardTitle className="text-xl">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <Button variant="outline" className="w-full justify-start h-12 hover:shadow-soft transition-all duration-300">
                        <TrendingUp className="w-4 h-4 mr-3" />
                        Export Analytics Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-12 hover:shadow-soft transition-all duration-300">
                        <Bell className="w-4 h-4 mr-3" />
                        Send Bulk Notification
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-12 hover:shadow-soft transition-all duration-300">
                        <MessageSquare className="w-4 h-4 mr-3" />
                        Clear Chat History
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-12 hover:shadow-soft transition-all duration-300">
                        <Settings className="w-4 h-4 mr-3" />
                        Advanced Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;