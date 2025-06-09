
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useContext } from "react";
import { AuthContext } from "@/App";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={isLoggedIn} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-spa-green/90 via-spa-green-dark/80 to-spa-green/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470"
            alt="Spa Services Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-floating"></div>
          <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-spa-cream rounded-full blur-3xl animate-floating" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-floating" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-spa-cream" />
              <span className="text-sm font-medium text-spa-cream">Premium Wellness Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-lora animate-fade-in text-white">
              Discover Our <span className="text-spa-cream italic">Spa Services</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-spa-cream to-white mx-auto mb-8 rounded-full animate-fade-in"></div>
            
            <p className="text-lg md:text-xl mb-8 text-spa-cream/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Immerse yourself in a world of tranquility with our comprehensive range of spa treatments, 
              expertly designed to rejuvenate your body, mind, and spirit.
            </p>
            
            <p className="text-base mb-12 text-spa-cream/80 max-w-xl mx-auto animate-fade-in">
              From therapeutic massages to luxurious facial treatments, each service is crafted 
              with premium natural ingredients and delivered by our skilled therapists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/book-now">
                <Button 
                  size="lg" 
                  className="bg-spa-cream hover:bg-white text-spa-green-dark text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Book Your Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#services-grid">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-spa-green-dark text-lg px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="services-grid" className="py-20 bg-gradient-to-br from-white via-spa-cream/20 to-spa-beige/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-spa-green/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-spa-green" />
                <span className="text-sm font-medium text-spa-green-dark">Complete Wellness Menu</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-spa-green-dark">Choose Your Perfect Treatment</h2>
              <p className="text-lg text-spa-gray leading-relaxed">
                Discover our comprehensive range of spa treatments designed to rejuvenate your body, 
                mind, and spirit. Each service is carefully crafted to provide you with the ultimate 
                relaxation experience using premium natural ingredients and expert techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard 
                    id={service.id}
                    name={service.name}
                    description={service.description}
                    price={service.price}
                    duration={service.duration}
                    image={service.image}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-spa-green/10 to-spa-beige/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border border-spa-beige/30 shadow-lg">
                <h3 className="text-2xl font-bold text-spa-green-dark mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-spa-gray mb-6 leading-relaxed">
                  Our experienced therapists can customize treatments to meet your specific needs. 
                  Contact us to discuss personalized spa packages or combination treatments.
                </p>
                <Link to="/contact">
                  <Button 
                    className="bg-spa-green hover:bg-spa-green-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Our Specialists
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
