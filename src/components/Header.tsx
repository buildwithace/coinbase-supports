import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "@/contexts/ChatContext";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getUnreadCount } = useChatContext();
  const unreadCount = getUnreadCount();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-glass opacity-50" />
      <div className="relative container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-primary animate-glow" />
            <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full animate-scale-pulse" />
          </div>
          <div>
            <span className="text-xl font-bold text-foreground">Coinbase Support Pro</span>
            <div className="text-xs text-primary font-medium">Certified • Trusted • 24/7</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => navigate("/")}
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            <span>Home</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
          <button 
            onClick={() => navigate("/contact")}
            className="relative text-foreground hover:text-primary transition-all duration-300 group"
          >
            <span>Contact Support</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
          <button 
            onClick={() => navigate("/admin")}
            className="relative text-foreground hover:text-primary transition-all duration-300 group flex items-center gap-2"
          >
            <span>Admin Panel</span>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="animate-pulse">
                {unreadCount}
              </Badge>
            )}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            )}
          </div>
          <Button 
            variant="professional" 
            onClick={() => navigate("/contact")}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Get Help Now</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            {unreadCount > 0 && !isMenuOpen && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-deep">
          <div className="absolute inset-0 bg-gradient-glass opacity-30" />
          <nav className="relative container mx-auto px-4 py-6 space-y-4">
            <button 
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contact Support
            </button>
            <button 
              onClick={() => {
                navigate("/admin");
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              <span>Admin Panel</span>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="animate-pulse">
                  {unreadCount}
                </Badge>
              )}
            </button>
            <Button 
              variant="professional" 
              className="w-full" 
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
            >
              Get Help Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;