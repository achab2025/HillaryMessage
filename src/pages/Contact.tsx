
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [showChat, setShowChat] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Generate a random ticket number
    const newTicketNumber = `HM${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setTicketNumber(newTicketNumber);
    setFormSubmitted(true);
    // Reset form after submission
    form.reset();
    
    // In a real app, this would send the form data to a server
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleSocialClick = (platform: string) => {
    // This would handle the social media redirect in a real application
    console.log(`Redirecting to ${platform}`);
    // Example URLs would be added here in a production environment
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-spa-cream to-white">
      <Navbar />
      
      <main className="flex-1 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spa-green-dark mb-4 font-lora">
              Get in Touch
            </h1>
            <p className="text-spa-gray text-lg md:text-xl max-w-2xl mx-auto">
              We're here to help with any questions or concerns you may have about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <Card className="shadow-lg border-spa-beige animate-fade-in bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-spa-green-dark">Contact Information</CardTitle>
                <CardDescription>Reach out through your preferred method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 group">
                  <div className="bg-spa-green text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@hillarmassage.com" className="text-spa-green hover:underline">
                      info@hillarmassage.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="bg-spa-green text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+15551234567" className="text-spa-green hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="bg-spa-green text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <address className="not-italic text-spa-gray">
                      123 Relaxation Street<br />
                      Wellness City, WC 12345
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-lg border-spa-beige animate-fade-in delay-100 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-spa-green-dark">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4 animate-fade-in">
                    <div className="bg-spa-green-light text-spa-green-dark p-6 rounded-lg inline-flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Thank you! Your message has been sent.</span>
                    </div>
                    <p className="text-spa-gray">Your ticket number is: <span className="font-bold">{ticketNumber}</span></p>
                    <p>We'll respond to your inquiry as soon as possible.</p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} className="border-spa-beige focus:border-spa-green" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" {...field} className="border-spa-beige focus:border-spa-green" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} className="border-spa-beige focus:border-spa-green" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message" 
                                {...field} 
                                className="min-h-[120px] border-spa-beige focus:border-spa-green"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-spa-green hover:bg-spa-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md hover:shadow-lg"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Social Media and Help Channels */}
          <div className="mb-16 animate-fade-in delay-200">
            <h2 className="text-2xl md:text-3xl font-bold text-spa-green-dark mb-6 text-center font-lora">Connect With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-md hover:shadow-xl transition-all text-center p-6 cursor-pointer"
                onClick={() => handleSocialClick('facebook')}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-500 text-white p-4 rounded-full">
                    <Facebook className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">Facebook Messenger</h3>
                    <p className="text-blue-600">Chat with us instantly on Messenger</p>
                  </div>
                  <Button variant="outline" className="border-blue-400 text-blue-700 hover:bg-blue-100">
                    Message Us
                  </Button>
                </div>
              </Card>
              
              <Card 
                className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-md hover:shadow-xl transition-all text-center p-6 cursor-pointer"
                onClick={() => handleSocialClick('whatsapp')}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-500 text-white p-4 rounded-full">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-700">WhatsApp</h3>
                    <p className="text-green-600">Direct message us on WhatsApp</p>
                  </div>
                  <Button variant="outline" className="border-green-400 text-green-700 hover:bg-green-100">
                    Chat Now
                  </Button>
                </div>
              </Card>
              
              <Card 
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-md hover:shadow-xl transition-all text-center p-6 cursor-pointer"
                onClick={() => handleSocialClick('twitter')}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-400 text-white p-4 rounded-full">
                    <Twitter className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-500">X (Twitter)</h3>
                    <p className="text-blue-400">Follow and DM us on X</p>
                  </div>
                  <Button variant="outline" className="border-blue-300 text-blue-500 hover:bg-blue-50">
                    Connect
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Live Chat Button */}
          <div className="fixed bottom-6 right-6 z-40">
            <Button 
              onClick={() => setShowChat(!showChat)}
              className="flex items-center gap-2 bg-spa-green hover:bg-spa-green-dark text-white rounded-full py-3 px-6 shadow-lg"
            >
              <MessageSquare className="h-5 w-5" />
              <span>{showChat ? "Close Chat" : "Live Chat"}</span>
            </Button>
            {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
