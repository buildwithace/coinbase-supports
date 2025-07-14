import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Users, Star, Zap, Award, TrendingUp } from "lucide-react";
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
            <div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-deep border border-border/30">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;