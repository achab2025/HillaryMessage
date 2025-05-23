
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-spa-green-dark border-b border-spa-green">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            Hillar Massage
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSectionClick('home')} 
              className="font-medium text-white hover:text-spa-green-light transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick('services')} 
              className="font-medium text-white hover:text-spa-green-light transition-colors"
            >
              Services
            </button>
            <Link 
              to="/about" 
              className="font-medium text-white hover:text-spa-green-light transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium text-white hover:text-spa-green-light transition-colors"
            >
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
                <Button 
                  variant="outline" 
                  className="bg-spa-green text-white hover:bg-spa-green-dark transition-colors duration-300"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/20">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-spa-green-dark/95 z-40 pt-20 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleSectionClick('home')} 
              className="p-3 border-b border-spa-green text-lg font-medium text-white"
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick('services')} 
              className="p-3 border-b border-spa-green text-lg font-medium text-white"
            >
              Services
            </button>
            <Link 
              to="/about"
              className="p-3 border-b border-spa-green text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="p-3 border-b border-spa-green text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isLoggedIn ? (
              <div className="mt-4 space-y-3">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-spa-green-dark hover:bg-spa-cream">Book Now</Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-white">Dashboard</Button>
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-white text-spa-green-dark hover:bg-spa-cream">Book Now</Button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white border-white">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
