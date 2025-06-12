
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return path !== "/" && location.pathname.startsWith(path);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-spa-blue">
            Hillar Massage
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.href) 
                    ? "text-spa-blue" 
                    : "text-foreground hover:text-spa-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Authentication buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/book-now">
                  <Button className="shadow-md hover:shadow-lg transition-all duration-300">Book Now</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300">Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/book-now">
                  <Button className="shadow-md hover:shadow-lg transition-all duration-300">Book Now</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300">Sign In</Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/98 backdrop-blur-lg z-50 pt-16">
          <div className="container mx-auto px-6 py-8 space-y-2 animate-fade-in max-w-sm mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`group relative block p-5 rounded-2xl font-semibold transition-all duration-300 border border-gray-100 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-200 hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] ${
                  isActive(item.href) 
                    ? "text-spa-blue bg-spa-blue/5 border-spa-blue/20 shadow-md" 
                    : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 text-lg">{item.label}</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-spa-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            
            <div className="pt-8 space-y-3">
              {isLoggedIn ? (
                <>
                  <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-spa-blue to-spa-blue/90 text-white font-semibold text-lg py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                      Book Now
                    </Button>
                  </Link>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-spa-blue border-2 border-spa-blue/30 bg-spa-blue/5 hover:bg-spa-blue/10 hover:border-spa-blue/50 font-semibold text-lg py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                      Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-spa-blue to-spa-blue/90 text-white font-semibold text-lg py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                      Book Now
                    </Button>
                  </Link>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-spa-blue border-2 border-spa-blue/30 bg-spa-blue/5 hover:bg-spa-blue/10 hover:border-spa-blue/50 font-semibold text-lg py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]">
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>
            
            <div className="flex-1 flex items-end justify-center pt-12">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Hillar Massage</p>
                <p className="text-gray-400 text-xs mt-1">Premium Wellness Experience</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
