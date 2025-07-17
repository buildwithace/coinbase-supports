import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, Users, Star, Zap, Award, TrendingUp, 
         Lock, HeadphonesIcon, Globe, MessageCircle, DollarSign, 
         CreditCard, AlertTriangle, Smartphone, Laptop, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ceoImage from "@/assets/ceo-image.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-glass" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary-glow/10 rounded-full animate-pulse-slow blur-xl" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-scale-pulse blur-2xl" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-in">
              <div className="relative inline-block mb-6">
                <Shield className="w-20 h-20 text-primary mx-auto animate-glow" />
                <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full animate-scale-pulse mx-auto" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient-shift bg-300%">
                  Professional Coinbase
                </span>
                <br />
                <span className="text-foreground">Support Specialists</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Get <span className="text-primary font-semibold">expert assistance</span> with your Coinbase account, trading issues, security concerns, and more. 
                <br />
                <span className="text-primary">Fast, reliable, and professional</span> support from certified specialists.
              </p>
            </div>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/contact")}
                className="min-w-[220px] text-lg px-8 py-4 relative overflow-hidden group shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-advanced opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Support Now
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("live-chat")?.scrollIntoView({ behavior: "smooth" })}
                className="min-w-[220px] text-lg px-8 py-4 border-2 border-primary/30 hover:border-primary hover:shadow-soft transition-all duration-300 backdrop-blur-sm"
              >
                Start Live Chat
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 group animate-fade-in">
                <div className="relative">
                  <CheckCircle className="w-10 h-10 text-success mx-auto mb-4 group-hover:animate-scale-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-success/20 rounded-full animate-pulse-slow mx-auto" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Verified Support</h3>
                <p className="text-sm text-muted-foreground">Certified Coinbase specialists with proven track record</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 group animate-fade-in [animation-delay:200ms]">
                <div className="relative">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4 group-hover:animate-scale-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-primary/20 rounded-full animate-pulse-slow mx-auto" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock premium support when you need it most</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 group animate-fade-in [animation-delay:400ms]">
                <div className="relative">
                  <Users className="w-10 h-10 text-warning mx-auto mb-4 group-hover:animate-scale-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-warning/20 rounded-full animate-pulse-slow mx-auto" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">10,000+ Happy Users</h3>
                <p className="text-sm text-muted-foreground">Join satisfied Coinbase users worldwide who trust us</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 group animate-fade-in [animation-delay:600ms]">
                <div className="relative">
                  <Star className="w-10 h-10 text-primary-glow mx-auto mb-4 group-hover:animate-scale-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-primary-glow/20 rounded-full animate-pulse-slow mx-auto" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">4.9/5 Rating</h3>
                <p className="text-sm text-muted-foreground">Highest rated Coinbase support service available</p>
              </div>
            </div>

            {/* Expert Team Section */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Meet Your Expert Support Team
              </h3>
              
              {/* CEO Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <img 
                    src={ceoImage} 
                    alt="CEO Brian Armstrong" 
                    className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-deep object-cover hover:shadow-glow transition-all duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-card animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Brian Armstrong</h4>
                <p className="text-sm text-muted-foreground mb-2">CEO & Founder, Coinbase</p>
                <p className="text-sm text-primary italic max-w-md mx-auto">
                  "We're committed to providing the highest level of support to our users. Your security and satisfaction are our top priorities."
                </p>
              </div>
              
              {/* Team Members */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center group">
                  <img 
                    src={teamMember1} 
                    alt="Security Specialist" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-3 border-primary/20 object-cover group-hover:shadow-elegant transition-all duration-300"
                  />
                  <h5 className="text-lg font-bold text-foreground">Sarah Johnson</h5>
                  <p className="text-sm text-muted-foreground mb-1">Senior Security Specialist</p>
                  <p className="text-xs text-success">● Online - 5 years experience</p>
                </div>
                <div className="text-center group">
                  <img 
                    src={teamMember2} 
                    alt="Trading Expert" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-3 border-primary/20 object-cover group-hover:shadow-elegant transition-all duration-300"
                  />
                  <h5 className="text-lg font-bold text-foreground">Michael Chen</h5>
                  <p className="text-sm text-muted-foreground mb-1">Trading Operations Expert</p>
                  <p className="text-xs text-success">● Online - 4 years experience</p>
                </div>
                <div className="text-center group">
                  <img 
                    src={teamMember3} 
                    alt="Support Manager" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-3 border-primary/20 object-cover group-hover:shadow-elegant transition-all duration-300"
                  />
                  <h5 className="text-lg font-bold text-foreground">David Rodriguez</h5>
                  <p className="text-sm text-muted-foreground mb-1">Support Team Manager</p>
                  <p className="text-xs text-success">● Online - 6 years experience</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Why Choose Our Premium Support?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <TrendingUp className="w-8 h-8" />
                    99.8%
                  </div>
                  <p className="text-muted-foreground">Issue Resolution Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt; 5min</div>
                  <p className="text-muted-foreground">Average Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Expert Availability</p>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <HeadphonesIcon className="w-6 h-6 text-primary" />
                Complete Support Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Account Security</h4>
                    <p className="text-sm text-muted-foreground">2FA setup, suspicious activity alerts, account recovery</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="w-12 h-12 text-success mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Trading Issues</h4>
                    <p className="text-sm text-muted-foreground">Order problems, market analysis, portfolio management</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 text-warning mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Payment Support</h4>
                    <p className="text-sm text-muted-foreground">Deposit/withdrawal issues, payment method setup</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Emergency Help</h4>
                    <p className="text-sm text-muted-foreground">Urgent account issues, fraud prevention, immediate assistance</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Platform Support */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Multi-Platform Support
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Laptop className="w-16 h-16 text-primary mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Desktop Platform</h4>
                    <p className="text-sm text-muted-foreground">Full Coinbase Pro features with advanced trading tools</p>
                    <Badge variant="outline" className="mt-2">Available 24/7</Badge>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Smartphone className="w-16 h-16 text-success mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Mobile App</h4>
                    <p className="text-sm text-muted-foreground">iOS & Android app support with instant notifications</p>
                    <Badge variant="outline" className="mt-2">Expert Guidance</Badge>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-16 h-16 text-warning mx-auto mb-4 group-hover:animate-scale-pulse" />
                    <h4 className="font-bold text-foreground mb-2">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">Instant support through our advanced chat system</p>
                    <Badge variant="outline" className="mt-2">Real-time Help</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                What Our Customers Say
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The support team resolved my account issue within minutes. Their live chat feature is incredibly responsive and the staff is very knowledgeable about crypto trading."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">MK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Michael K.</p>
                      <p className="text-xs text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I was locked out of my account during a critical trading moment. The team helped me regain access quickly and even provided tips to prevent future issues. Excellent service!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">SL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarah L.</p>
                      <p className="text-xs text-muted-foreground">Pro Trader</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a new crypto investor, I had many questions. The support team was patient, educational, and helped me understand security best practices. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">DT</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">David T.</p>
                      <p className="text-xs text-muted-foreground">New Investor</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Had a payment issue that was preventing me from buying Bitcoin. The support specialist walked me through the solution step by step. Amazing customer service experience!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">RW</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Rachel W.</p>
                      <p className="text-xs text-muted-foreground">Business Owner</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Great support team! They helped me set up 2FA security after I got suspicious emails. Response was quick and they verified my identity properly. Feel much safer now."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">JM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">James M.</p>
                      <p className="text-xs text-muted-foreground">IT Professional</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "My withdrawal was stuck for hours and I was panicking. The support agent not only resolved it immediately but also explained what happened. Professional and reassuring!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Anna L.</p>
                      <p className="text-xs text-muted-foreground">Day Trader</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Coinbase support helped me recover my account after I forgot my password and lost my phone. The verification process was thorough but fair. Got my crypto back safely!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">TC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Tom C.</p>
                      <p className="text-xs text-muted-foreground">Engineer</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The mobile app was acting up and I couldn't access my portfolio. Support guided me through clearing cache and updating the app. Works perfectly now. Thanks!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">LR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Lisa R.</p>
                      <p className="text-xs text-muted-foreground">Student</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-elegant transition-all duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Excellent support for institutional trading. They helped set up API access for our trading bot and provided detailed documentation. Very professional service."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary">PH</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Peter H.</p>
                      <p className="text-xs text-muted-foreground">Fund Manager</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Quick Support Actions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  variant="outline" 
                  className="h-16 flex flex-col gap-2 border-primary/30 hover:border-primary hover:shadow-soft"
                  onClick={() => navigate("/contact")}
                >
                  <Lock className="w-6 h-6" />
                  <span className="text-sm">Account Recovery</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-16 flex flex-col gap-2 border-success/30 hover:border-success hover:shadow-soft"
                  onClick={() => navigate("/contact")}
                >
                  <CreditCard className="w-6 h-6" />
                  <span className="text-sm">Trading Help</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-16 flex flex-col gap-2 border-warning/30 hover:border-warning hover:shadow-soft"
                  onClick={() => navigate("/contact")}
                >
                  <DollarSign className="w-6 h-6" />
                  <span className="text-sm">Payment Issues</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-16 flex flex-col gap-2 border-destructive/30 hover:border-destructive hover:shadow-soft"
                  onClick={() => document.getElementById("live-chat")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-sm">Emergency Chat</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;