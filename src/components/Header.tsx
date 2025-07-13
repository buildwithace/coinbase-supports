import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Coinbase Support Pro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => navigate("/")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => navigate("/contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact Support
          </button>
          <button 
            onClick={() => navigate("/admin")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Admin Panel
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="professional" onClick={() => navigate("/contact")}>
            Get Help Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-card">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Contact Support
            </button>
            <button 
              onClick={() => {
                navigate("/admin");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Admin Panel
            </button>
            <Button variant="professional" className="w-full" onClick={() => navigate("/contact")}>
              Get Help Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;