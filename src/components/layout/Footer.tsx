
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-spa-cream border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-spa-blue mb-4">Serene Touch</h3>
            <p className="text-muted-foreground mb-4">
              Your sanctuary for relaxation and wellness through expert massage therapy.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-spa-blue transition-colors">Home</Link></li>
              <li><Link to="#services" className="text-muted-foreground hover:text-spa-blue transition-colors">Services</Link></li>
              <li><Link to="#about" className="text-muted-foreground hover:text-spa-blue transition-colors">About Us</Link></li>
              <li><Link to="#contact" className="text-muted-foreground hover:text-spa-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/booking" className="text-muted-foreground hover:text-spa-blue transition-colors">Swedish Massage</Link></li>
              <li><Link to="/booking" className="text-muted-foreground hover:text-spa-blue transition-colors">Deep Tissue Massage</Link></li>
              <li><Link to="/booking" className="text-muted-foreground hover:text-spa-blue transition-colors">Hot Stone Therapy</Link></li>
              <li><Link to="/booking" className="text-muted-foreground hover:text-spa-blue transition-colors">Aromatherapy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Relaxation Avenue</p>
              <p>Serenity, CA 90210</p>
              <p className="mt-2">contact@serenetouch.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Serene Touch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
