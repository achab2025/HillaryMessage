
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useContext } from "react";
import { AuthContext } from "@/App";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const { isLoggedIn } = useContext(AuthContext);

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
    },
    {
      id: 5,
      name: "Deep Relaxation Massage",
      description: "A gentle form of massage that uses long strokes, kneading, and circular movements on superficial layers of muscle.",
      duration: "60 min",
      price: "$85",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470"
    },
    {
      id: 6,
      name: "Therapeutic Massage",
      description: "A massage that focuses on realigning deeper layers of muscles and connective tissue.",
      duration: "60 min",
      price: "$95",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470"
    },
    {
      id: 7,
      name: "Hot Stone Therapy",
      description: "A specialty massage that uses smooth, heated stones as an extension of the therapist's hands.",
      duration: "90 min",
      price: "$110",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470"
    },
    {
      id: 8,
      name: "Aromatherapy Massage",
      description: "A massage therapy that uses essential oils to enhance psychological and physical well-being.",
      duration: "60 min",
      price: "$90",
      image: "https://images.unsplash.com/photo-1596178060810-7973de2f467a?q=80&w=1470"
    }
  ];

  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={isLoggedIn} />
      
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-spa-green-dark">Our Spa Services</h1>
              <p className="text-lg text-spa-gray">
                Discover our comprehensive range of spa treatments designed to rejuvenate your body, 
                mind, and spirit. Each service is carefully crafted to provide you with the ultimate 
                relaxation experience using premium natural ingredients and expert techniques.
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
              <div className="bg-spa-green-light p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-spa-green-dark mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-spa-gray mb-6">
                  Our experienced therapists can customize treatments to meet your specific needs. 
                  Contact us to discuss personalized spa packages or combination treatments.
                </p>
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
