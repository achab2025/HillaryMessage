
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create submission object
    const submission = {
      id: `sub_${Date.now()}`,
      name,
      email,
      message,
      date: new Date().toISOString(),
      status: "unread",
    };

    // Get existing submissions or create empty array
    const existingSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    
    // Add new submission
    const updatedSubmissions = [submission, ...existingSubmissions];
    
    // Save to localStorage
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);

    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">Contact Us</h2>
          <p className="text-lg text-spa-gray">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-spa-green mt-1" />
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-spa-gray">info@serenetouch.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-spa-green mt-1" />
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-spa-gray">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-spa-green mt-1" />
              <div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-spa-gray">123 Relaxation Street<br />Wellness City, WC 12345</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-spa-beige rounded-md"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-spa-beige rounded-md"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-spa-beige rounded-md h-32"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button 
              className="w-full bg-spa-green hover:bg-spa-green-dark"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
