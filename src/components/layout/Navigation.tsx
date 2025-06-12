
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavigationProps {
  isLoggedIn: boolean;
}

export const Navigation = ({ isLoggedIn }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-spa-green-dark border-b border-spa-green">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white">Hillary Massage</Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleSectionClick('home')} className="font-medium text-white hover:text-spa-green-light transition-colors">
              Home
            </button>
            <Link to="/services" className="font-medium text-white hover:text-spa-green-light transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium text-white hover:text-spa-green-light transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-white hover:text-spa-green-light transition-colors">
              Contact
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/book-now">
                  <Button className="bg-white text-spa-green-dark hover:bg-spa-cream">Book Now</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/book-now">
                  <Button className="bg-white text-spa-green-dark hover:bg-spa-cream">Book Now</Button>
                </Link>
                <Button variant="outline" className="bg-spa-green text-white hover:bg-spa-green-dark transition-colors duration-300" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-spa-green-dark/98 via-spa-green/95 to-spa-green-dark/98 backdrop-blur-lg z-40 pt-20 px-4 md:hidden">
          <div className="flex flex-col space-y-2 animate-fade-in">
            <button 
              onClick={() => handleSectionClick('home')} 
              className="group p-4 rounded-xl border-b border-spa-green/30 text-left transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm"
            >
              <span className="text-lg font-medium text-white group-hover:text-spa-green-light transition-colors">
                Home
              </span>
            </button>
            
            <Link 
              to="/services" 
              className="group p-4 rounded-xl border-b border-spa-green/30 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-medium text-white group-hover:text-spa-green-light transition-colors">
                Services
              </span>
            </Link>
            
            <Link 
              to="/about" 
              className="group p-4 rounded-xl border-b border-spa-green/30 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-medium text-white group-hover:text-spa-green-light transition-colors">
                About
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group p-4 rounded-xl border-b border-spa-green/30 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-medium text-white group-hover:text-spa-green-light transition-colors">
                Contact
              </span>
            </Link>
            
            {isLoggedIn ? (
              <div className="mt-6 space-y-3 px-2">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-spa-green-dark hover:bg-spa-cream text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Now
                  </Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-white hover:bg-white/20 text-lg py-4 rounded-xl backdrop-blur-sm">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="mt-6 space-y-3 px-2">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-spa-green-dark hover:bg-spa-cream text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Now
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-white hover:bg-white/20 text-lg py-4 rounded-xl backdrop-blur-sm">
                    Login
                  </Button>
                </Link>
              </div>
            )}
            
            <div className="flex-1 flex items-end justify-center pb-8 pt-12">
              <div className="text-center">
                <p className="text-white/60 text-sm">Hillary Massage</p>
                <p className="text-white/40 text-xs mt-1">Wellness & Relaxation</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
