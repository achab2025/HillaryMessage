
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Facial Massage",
      description: "Relaxing massage to improve skin tone and relieve tension.",
      duration: "45 min",
      price: "$40",
      image: "bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470')]"
    },
    {
      id: 2,
      name: "Back Massage",
      description: "Deep tissue massage to relieve pain and muscle tension.",
      duration: "60 min",
      price: "$55",
      image: "bg-[url('https://images.unsplash.com/photo-1519823551278-5a109f4235c5?q=80&w=1374')]"
    },
    {
      id: 3,
      name: "Spa Package",
      description: "Comprehensive body care using natural ingredients.",
      duration: "90 min",
      price: "$85",
      image: "bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470')]"
    },
    {
      id: 4,
      name: "Facial Treatment",
      description: "Cleansing, nourishing, and rejuvenating facial procedures.",
      duration: "60 min",
      price: "$50",
      image: "bg-[url('https://images.unsplash.com/photo-1616394584738-fc6970f15c1b?q=80&w=1470')]"
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
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-spa-beige bg-white">
              <div className={`h-48 ${service.image} bg-cover bg-center`} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-spa-green-dark">{service.name}</h3>
                <p className="text-spa-gray mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-spa-gray" />
                      <span className="text-sm text-spa-gray">{service.duration}</span>
                    </div>
                    <span className="text-spa-green font-medium">{service.price}</span>
                  </div>
                  <Link to="/booking">
                    <Button variant="outline" size="sm" className="border-spa-green text-spa-green hover:bg-spa-green hover:text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
