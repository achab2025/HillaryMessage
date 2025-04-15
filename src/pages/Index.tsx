import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, X, ChevronRight, Calendar, Clock, Star, Heart, Gift } from "lucide-react";

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    image: "bg-spa-lavender/40",
    stars: 5,
    text: "I've been coming to Serene Touch for over a year now and I can't imagine going anywhere else. Their therapists are incredibly skilled and the atmosphere is so calming."
  },
  {
    id: 2,
    name: "Michael T.",
    image: "bg-spa-blue/40",
    stars: 5,
    text: "The deep tissue massage here is absolutely incredible. I came in with serious back pain and left feeling like a new person. Highly recommend!"
  },
  {
    id: 3,
    name: "Emma W.",
    image: "bg-spa-teal/40",
    stars: 4,
    text: "Beautiful space, professional staff, and the hot stone therapy was divine. Will definitely be returning for more treatments."
  }
];

// Mock services
const services = [
  {
    id: 1,
    name: "Swedish Massage",
    description: "A gentle form of massage that uses long strokes, kneading, and circular movements.",
    duration: "60 min",
    price: "$85",
    image: "bg-gradient-to-r from-spa-blue/30 to-spa-teal/30"
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    description: "Targets the deeper layers of muscle and connective tissue for pain relief.",
    duration: "60 min",
    price: "$95",
    image: "bg-gradient-to-r from-spa-teal/30 to-spa-green/30"
  },
  {
    id: 3,
    name: "Hot Stone Therapy",
    description: "Uses smooth, heated stones placed on specific points of the body.",
    duration: "90 min",
    price: "$110",
    image: "bg-gradient-to-r from-spa-lavender/30 to-spa-blue/30"
  }
];

const Index = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-spa-cream">
      {/* Hero section with animated background */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-spa-blue to-spa-teal opacity-10" />
        <div className="absolute inset-0 z-0 bg-wave-pattern opacity-10 animate-wave-flow" />
        
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-spa-blue">
                Serene Touch
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-medium hover:text-spa-blue transition-colors">Home</Link>
              <Link to="#services" className="font-medium hover:text-spa-blue transition-colors">Services</Link>
              <Link to="#about" className="font-medium hover:text-spa-blue transition-colors">About</Link>
              <Link to="#contact" className="font-medium hover:text-spa-blue transition-colors">Contact</Link>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link to="/booking">
                    <Button>Book Now</Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/booking">
                    <Button>Book Now</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </nav>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 pt-20 px-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="p-3 border-b text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="#services" 
                  className="p-3 border-b text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="#about" 
                  className="p-3 border-b text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="#contact" 
                  className="p-3 border-b text-lg font-medium"
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
                      <Button variant="outline" className="w-full">Dashboard</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-4 space-y-3">
                    <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full">Book Now</Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Hero content */}
          <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Experience the Art of <span className="text-spa-blue">Relaxation</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
                Discover a sanctuary of tranquility where skilled therapists help you find
                balance, relief from pain, and deep relaxation through our premium massage services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/booking">
                  <Button size="lg" className="text-lg px-8">
                    Book Your Session
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="#services">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Serene Touch</h2>
            <p className="text-lg text-muted-foreground">
              We deliver exceptional massage experiences through our commitment to quality,
              expertise, and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-spa-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-spa-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Therapists</h3>
              <p className="text-muted-foreground">
                Our licensed massage therapists have years of experience and specialized training.
              </p>
            </div>

            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-spa-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-spa-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">
                Each session is tailored to your specific needs, preferences, and wellness goals.
              </p>
            </div>

            <div className="bg-spa-cream p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-spa-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-spa-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Experience</h3>
              <p className="text-muted-foreground">
                From our tranquil atmosphere to premium products, every detail is designed for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="py-20 bg-spa-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a variety of massage therapies to address your unique needs,
              from relaxation to pain relief.
            </p>
          </div>

          <Tabs defaultValue="massage" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="massage">Massage</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="massage">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card key={service.id} className="overflow-hidden card-hover">
                    <div className={`h-40 ${service.image}`} />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{service.duration}</span>
                          </div>
                          <span className="text-spa-blue font-medium">{service.price}</span>
                        </div>
                        <Link to="/booking">
                          <Button variant="outline" size="sm">Book</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/booking">
                  <Button>View All Services</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="specialty">
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-4">Specialty Treatments</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our premium specialty treatments designed to address specific concerns and enhance your wellbeing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">Aromatherapy Massage</h4>
                      <p className="text-muted-foreground mb-4">
                        Essential oils enhance your massage experience with therapeutic benefits.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-spa-blue font-medium">From $95</span>
                        <Link to="/booking">
                          <Button variant="outline" size="sm">Book</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">Prenatal Massage</h4>
                      <p className="text-muted-foreground mb-4">
                        Gentle relief for expectant mothers, focused on comfort and safety.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-spa-blue font-medium">From $90</span>
                        <Link to="/booking">
                          <Button variant="outline" size="sm">Book</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="packages">
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-4">Membership Packages</h3>
                <p className="text-muted-foreground mb-6">
                  Save with our membership packages and enjoy regular massage treatments at discounted rates.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <Card className="card-hover relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-spa-blue text-white px-3 py-1 text-xs font-medium">
                      POPULAR
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">Monthly Escape</h4>
                      <div className="text-3xl font-bold text-spa-blue mb-2">$75<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                      <p className="text-muted-foreground mb-4">
                        One 60-minute massage per month
                      </p>
                      <Link to="/login">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">Essential Balance</h4>
                      <div className="text-3xl font-bold text-spa-teal mb-2">$135<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                      <p className="text-muted-foreground mb-4">
                        Two 60-minute massages per month
                      </p>
                      <Link to="/login">
                        <Button variant="outline" className="w-full">Get Started</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">Ultimate Wellness</h4>
                      <div className="text-3xl font-bold text-spa-green mb-2">$190<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                      <p className="text-muted-foreground mb-4">
                        Three 60-minute massages per month
                      </p>
                      <Link to="/login">
                        <Button variant="outline" className="w-full">Get Started</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied clients about their Serene Touch experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`inline h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center mr-3`}>
                      <span className="font-bold text-spa-blue">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Verified Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-spa-blue to-spa-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Serene Touch?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book your first appointment today and begin your journey to wellness and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-spa-blue hover:bg-white/90 text-lg px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
