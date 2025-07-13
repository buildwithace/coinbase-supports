import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Professional Coinbase Support
              <span className="block text-primary">At Your Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert assistance with your Coinbase account, trading issues, security concerns, and more. 
              Fast, reliable, and professional support from certified Coinbase specialists.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/contact")}
              className="min-w-[200px]"
            >
              Get Support Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("live-chat")?.scrollIntoView({ behavior: "smooth" })}
              className="min-w-[200px]"
            >
              Start Live Chat
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card animate-fade-in">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Verified Support</h3>
              <p className="text-sm text-muted-foreground">Certified Coinbase specialists ready to help</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card animate-fade-in">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock support when you need it</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card animate-fade-in">
              <Users className="w-8 h-8 text-warning mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Trusted by Thousands</h3>
              <p className="text-sm text-muted-foreground">Join satisfied Coinbase users worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;