
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useContext } from "react";
import { AuthContext } from "@/App";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const services = [
    {
      id: 1,
      name: "Facial Massage",
      description: "Relaxing massage to improve skin tone and relieve tension.",
      duration: "45 min",
      price: "₵160",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470"
    },
    {
      id: 2,
      name: "Back Massage",
      description: "Deep tissue massage to relieve pain and muscle tension.",
      duration: "60 min",
      price: "₵220",
      image: "https://images.unsplash.com/photo-1519823551278-5a109f4235c5?q=80&w=1374"
    },
    {
      id: 3,
      name: "Spa Package",
      description: "Comprehensive body care using natural ingredients.",
      duration: "90 min",
      price: "₵340",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470"
    },
    {
      id: 4,
      name: "Facial Treatment",
      description: "Cleansing, nourishing, and rejuvenating facial procedures.",
      duration: "60 min",
      price: "₵200",
      image: "https://images.unsplash.com/photo-1616394584738-fc6970f15c1b?q=80&w=1470"
    },
    {
      id: 5,
      name: "Deep Relaxation Massage",
      description: "A gentle form of massage that uses long strokes, kneading, and circular movements on superficial layers of muscle.",
      duration: "60 min",
      price: "₵280",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470"
    },
    {
      id: 6,
      name: "Therapeutic Massage",
      description: "A massage that focuses on realigning deeper layers of muscles and connective tissue.",
      duration: "60 min",
      price: "₵320",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470"
    },
    {
      id: 7,
      name: "Hot Stone Therapy",
      description: "A specialty massage that uses smooth, heated stones as an extension of the therapist's hands.",
      duration: "90 min",
      price: "₵380",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470"
    },
    {
      id: 8,
      name: "Aromatherapy Massage",
      description: "A massage therapy that uses essential oils to enhance psychological and physical well-being.",
      duration: "60 min",
      price: "₵300",
      image: "https://images.unsplash.com/photo-1596178060810-7973de2f467a?q=80&w=1470"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation isLoggedIn={isLoggedIn} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-md">
              Professional Spa Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Our Services
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Professional spa treatments designed to rejuvenate your body and mind. 
              Each service is delivered by our experienced therapists.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/book-now">
                <Button size="lg" className="px-6">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#services-grid">
                <Button size="lg" variant="outline" className="px-6">
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="services-grid" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">All Services</h2>
              <p className="text-muted-foreground">
                Browse our complete range of professional spa treatments. 
                Each service is designed to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                  image={service.image}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-muted/50 p-8 rounded-lg max-w-2xl mx-auto border">
                <h3 className="text-xl font-semibold mb-3">Need a Custom Treatment?</h3>
                <p className="text-muted-foreground mb-6">
                  Our therapists can customize treatments to meet your specific needs. 
                  Contact us to discuss personalized packages.
                </p>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
