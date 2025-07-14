import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, Shield, Clock, Users, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ceoImage from "@/assets/ceo-image.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    priority: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Support ticket submitted!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        issue: "",
        priority: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact Coinbase Support</h1>
              <p className="text-xl text-muted-foreground">
                Need help with your Coinbase account? Our expert team is here to assist you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Support Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Issue Category *
                          </label>
                          <Select value={formData.issue} onValueChange={(value) => setFormData({...formData, issue: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select issue type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="account">Account Access</SelectItem>
                              <SelectItem value="trading">Trading Issues</SelectItem>
                              <SelectItem value="security">Security Concerns</SelectItem>
                              <SelectItem value="payments">Payment Problems</SelectItem>
                              <SelectItem value="verification">Identity Verification</SelectItem>
                              <SelectItem value="fees">Fees & Charges</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Priority Level
                          </label>
                          <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Describe Your Issue *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Please provide detailed information about your issue..."
                          rows={6}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="professional" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Support Request"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Trust Signals */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@coinbasepro.help</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (888) 908-7930</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">Certified Coinbase specialists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">99.5% issue resolution rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">24/7 availability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">Secure & confidential</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Leadership Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <img 
                          src={ceoImage} 
                          alt="CEO Brian Armstrong" 
                          className="w-20 h-20 rounded-full mx-auto mb-3 border-3 border-primary/30 shadow-card object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card animate-pulse" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">Brian Armstrong</h4>
                      <p className="text-xs text-muted-foreground">CEO, Coinbase</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <img 
                          src={teamMember1} 
                          alt="Security Lead" 
                          className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-primary/20 object-cover"
                        />
                        <p className="text-xs font-medium text-foreground">Security Lead</p>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Online
                        </Badge>
                      </div>
                      <div className="text-center">
                        <img 
                          src={teamMember2} 
                          alt="Trading Expert" 
                          className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-primary/20 object-cover"
                        />
                        <p className="text-xs font-medium text-foreground">Trading Expert</p>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Online
                        </Badge>
                      </div>
                      <div className="text-center">
                        <img 
                          src={teamMember3} 
                          alt="Support Manager" 
                          className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-primary/20 object-cover"
                        />
                        <p className="text-xs font-medium text-foreground">Support Mgr</p>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Online
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Trust Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">Response Time</span>
                      </div>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        &lt; 5 min
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm">Users Helped</span>
                      </div>
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        50,000+
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm">Security Score</span>
                      </div>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        99.9%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;