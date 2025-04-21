
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-spa-green/10 to-spa-cream flex items-center justify-center animate-fade-in">
      <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg border border-spa-green/20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col justify-center gap-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-spa-green-dark mb-3 font-playfair">Contact Us</h2>
            <p className="text-lg text-spa-gray mb-4">
              We’d love to hear from you. Reach out with your questions or to request a booking!
            </p>
            <div className="space-y-6 text-spa-green-dark">
              <div className="flex items-center gap-3 group">
                <Mail className="h-7 w-7 text-spa-green group-hover:animate-bounce" />
                <span className="font-semibold">info@serenetouch.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-7 w-7 text-spa-green group-hover:animate-bounce" />
                <span className="font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="h-7 w-7 text-spa-green group-hover:animate-bounce" />
                <span className="font-semibold">123 Relaxation Street, Wellness City, WC 12345</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in delay-150">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-spa-green/30 rounded-md focus:ring-2 focus:ring-spa-green focus:outline-none transition"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-spa-green/30 rounded-md focus:ring-2 focus:ring-spa-green focus:outline-none transition"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-spa-green/30 rounded-md h-32 focus:ring-2 focus:ring-spa-green focus:outline-none transition"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <Button
              className="w-full bg-spa-green hover:bg-spa-green-dark transition font-semibold text-lg shadow-lg transform hover:scale-105"
              type="submit"
              disabled={sent}
            >
              {sent ? "Thank You! 🎉" : "Send Message"}
            </Button>
            {sent && <div className="mt-3 text-center text-spa-green-dark animate-fade-in">We got your message!</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
