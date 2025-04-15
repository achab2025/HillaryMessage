
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavigationProps {
  isLoggedIn: boolean;
}

export const Navigation = ({ isLoggedIn }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            Serene Touch
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-white hover:text-violet-200 transition-colors">Home</Link>
            <Link to="#services" className="font-medium text-white hover:text-violet-200 transition-colors">Services</Link>
            <Link to="#about" className="font-medium text-white hover:text-violet-200 transition-colors">About</Link>
            <Link to="#contact" className="font-medium text-white hover:text-violet-200 transition-colors">Contact</Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/booking">
                  <Button className="bg-violet-600 hover:bg-violet-700">Book Now</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Dashboard
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/booking">
                  <Button className="bg-violet-600 hover:bg-violet-700">Book Now</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Sign In
                  </Button>
                </Link>
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
        <div className="fixed inset-0 bg-violet-900/95 z-40 pt-20 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="p-3 border-b text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#services" 
              className="p-3 border-b text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="#about" 
              className="p-3 border-b text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="#contact" 
              className="p-3 border-b text-lg font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isLoggedIn ? (
              <div className="mt-4 space-y-3">
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white">Dashboard</Button>
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-white">Sign In</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
