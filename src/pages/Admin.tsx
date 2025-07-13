import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Users, MessageSquare, Settings, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCode, setLoginCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const correctCode = "uC943YpKhpd8";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (loginCode === correctCode) {
        setIsAuthenticated(true);
        toast({
          title: "Access granted",
          description: "Welcome to the admin panel."
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
    { id: "001", name: "John Smith", email: "john@email.com", issue: "Account Access", priority: "High", status: "Open" },
    { id: "002", name: "Sarah Johnson", email: "sarah@email.com", issue: "Trading Issues", priority: "Medium", status: "In Progress" },
    { id: "003", name: "Mike Chen", email: "mike@email.com", issue: "Security Concerns", priority: "Urgent", status: "Open" },
  ];

  const mockChats = [
    { id: "chat1", user: "Alice Cooper", message: "Having trouble with 2FA setup", time: "2 min ago", status: "Active" },
    { id: "chat2", user: "Bob Wilson", message: "Can't access my wallet", time: "5 min ago", status: "Waiting" },
    { id: "chat3", user: "Carol Davis", message: "Transaction not showing up", time: "10 min ago", status: "Active" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="shadow-elegant">
                <CardHeader className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Admin Panel Access</CardTitle>
                  <p className="text-muted-foreground">Enter authorization code to continue</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Authorization Code
                      </label>
                      <Input
                        type="password"
                        value={loginCode}
                        onChange={(e) => setLoginCode(e.target.value)}
                        placeholder="Enter admin code"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="professional" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      {isLoading ? "Verifying..." : "Access Admin Panel"}
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm text-accent-foreground">
                      <strong>Note:</strong> This admin panel is visible to demonstrate functionality. 
                      In a production environment, this would be hidden or on a separate subdomain.
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
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage support tickets and live chats</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </Button>
            </div>

            <Tabs defaultValue="tickets" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tickets" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Support Tickets
                </TabsTrigger>
                <TabsTrigger value="chats" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Live Chats
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tickets">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Support Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockTickets.map((ticket) => (
                        <div key={ticket.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-medium">#{ticket.id}</span>
                                <span className="text-foreground">{ticket.name}</span>
                                <Badge variant={ticket.priority === "Urgent" ? "destructive" : "default"}>
                                  {ticket.priority}
                                </Badge>
                                <Badge variant="outline">{ticket.status}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{ticket.email}</p>
                              <p className="text-sm font-medium">{ticket.issue}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chats">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Active Live Chats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockChats.map((chat) => (
                        <div key={chat.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-medium">{chat.user}</span>
                                <Badge variant={chat.status === "Active" ? "default" : "secondary"}>
                                  {chat.status}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{chat.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{chat.message}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Join Chat
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>System Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Live Chat System</span>
                        <Badge className="bg-success text-success-foreground">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <Badge className="bg-success text-success-foreground">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Auto-responses</span>
                        <Badge className="bg-success text-success-foreground">Enabled</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Export Support Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Send Bulk Notification
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Clear Chat History
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