
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
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
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-spa-cream via-white to-spa-beige/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-spa-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-spa-green-dark rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-spa-green rounded-full blur-2xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-spa-green/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-spa-green" />
            <span className="text-sm font-medium text-spa-green-dark">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-spa-green-dark leading-tight">
            Our Spa <span className="text-spa-green italic">Rituals</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-spa-green to-spa-green-dark mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-spa-gray max-w-2xl mx-auto leading-relaxed">
            We offer various types of spa treatments to meet your individual needs,
            from relaxation to pain relief. Each experience is crafted with care and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-spa-beige/30">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-spa-green-dark mb-2">
                Ready to Experience Pure Relaxation?
              </h3>
              <p className="text-spa-gray text-sm">
                Discover our complete range of services and book your perfect spa experience
              </p>
            </div>
            
            <Link to="/book-now" className="shrink-0">
              <Button 
                size="lg" 
                className="bg-spa-green hover:bg-spa-green-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
