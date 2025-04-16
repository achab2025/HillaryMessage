
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-spa-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-spa-cream mb-4">Spa & Wellness</h3>
            <p className="text-spa-green-light mb-4">
              Your sanctuary for relaxation and wellness through expert spa treatments.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-spa-green-light hover:text-white transition-colors">Home</Link></li>
              <li><Link to="#services" className="text-spa-green-light hover:text-white transition-colors">Services</Link></li>
              <li><Link to="#about" className="text-spa-green-light hover:text-white transition-colors">About</Link></li>
              <li><Link to="#contact" className="text-spa-green-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Facial Massage</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Back Massage</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Spa Programs</Link></li>
              <li><Link to="/booking" className="text-spa-green-light hover:text-white transition-colors">Facial Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-spa-cream">Contact</h4>
            <address className="not-italic text-spa-green-light">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <p>123 Relaxation Street</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <p>info@spa-wellness.com</p>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t border-spa-green mt-8 pt-8 text-center text-spa-green-light">
          <p>&copy; {new Date().getFullYear()} Spa & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
