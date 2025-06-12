
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
        <div className="fixed inset-0 bg-gradient-to-b from-spa-green-dark/98 via-spa-green/95 to-spa-green-dark/98 backdrop-blur-lg z-40 pt-20 px-6 md:hidden">
          <div className="flex flex-col space-y-1 animate-fade-in max-w-sm mx-auto">
            <button 
              onClick={() => handleSectionClick('home')} 
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-left transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-lg font-semibold text-white group-hover:text-spa-green-light transition-colors">
                Home
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <Link 
              to="/services" 
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-semibold text-white group-hover:text-spa-green-light transition-colors">
                Services
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              to="/about" 
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-semibold text-white group-hover:text-spa-green-light transition-colors">
                About
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              to="/contact" 
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg font-semibold text-white group-hover:text-spa-green-light transition-colors">
                Contact
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            {isLoggedIn ? (
              <div className="mt-8 space-y-3 px-2">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-white to-spa-cream text-spa-green-dark hover:from-spa-cream hover:to-white font-semibold text-lg py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                    Book Now
                  </Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-2 border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 font-semibold text-lg py-6 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="mt-8 space-y-3 px-2">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-white to-spa-cream text-spa-green-dark hover:from-spa-cream hover:to-white font-semibold text-lg py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                    Book Now
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-2 border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 font-semibold text-lg py-6 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
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
