
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark font-lora">Contact Us</h2>
          <p className="text-lg text-spa-gray max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of our channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-spa-green mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-spa-green-dark">Visit Us</h3>
                  <p className="text-spa-gray">123 Relaxation Street<br />Wellness City, WC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-spa-green mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-spa-green-dark">Call Us</h3>
                  <p className="text-spa-gray">+1 (555) 123-4567<br />Mon - Sun: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-spa-green mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-spa-green-dark">Email Us</h3>
                  <p className="text-spa-gray">info@spa-wellness.com<br />support@spa-wellness.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px] bg-white"
                />
              </div>
              <Button type="submit" className="w-full bg-spa-green hover:bg-spa-green-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
