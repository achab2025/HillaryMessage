
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Facial Massage",
      description: "Relaxing massage to improve skin tone and relieve tension.",
      duration: "45 min",
      price: "$40",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470"
    },
    {
      id: 2,
      name: "Back Massage",
      description: "Deep tissue massage to relieve pain and muscle tension.",
      duration: "60 min",
      price: "$55",
      image: "https://images.unsplash.com/photo-1519823551278-5a109f4235c5?q=80&w=1374"
    },
    {
      id: 3,
      name: "Spa Package",
      description: "Comprehensive body care using natural ingredients.",
      duration: "90 min",
      price: "$85",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470"
    },
    {
      id: 4,
      name: "Facial Treatment",
      description: "Cleansing, nourishing, and rejuvenating facial procedures.",
      duration: "60 min",
      price: "$50",
      image: "https://images.unsplash.com/photo-1616394584738-fc6970f15c1b?q=80&w=1470"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spa-green-dark">Our Spa Rituals</h2>
          <p className="text-lg text-spa-gray">
            We offer various types of spa treatments to meet your individual needs,
            from relaxation to pain relief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <div className="text-center">
          <Link to="/booking">
            <Button className="bg-spa-green hover:bg-spa-green-dark">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
