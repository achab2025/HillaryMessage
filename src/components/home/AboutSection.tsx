
import { Book, Heart, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-spa-cream py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-spa-green-dark mb-4">
            About Hillar Massage
          </h2>
          <div className="w-16 h-1 bg-spa-green mx-auto mb-6"></div>
          <p className="text-spa-gray max-w-3xl mx-auto">
            A sanctuary of relaxation where ancient techniques meet modern comfort. 
            Our journey began with a simple philosophy: everyone deserves the healing touch of massage therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-full overflow-hidden rounded-lg shadow-md">
              <div className="absolute inset-0 bg-spa-green-dark/20 z-10 flex items-center justify-center">
                <div className="bg-white/90 p-6 rounded-lg max-w-md">
                  <h3 className="text-xl font-bold text-spa-green-dark mb-2">Our Story</h3>
                  <p className="text-spa-gray">
                    Founded in 2010, Hillar Massage began as a small practice dedicated to bringing 
                    authentic massage techniques to our community. Over the years, we've grown into 
                    a respected wellness center committed to personalized care for each client.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Massage therapist working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="h-full bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-spa-green-dark mb-4">Our Mission</h3>
              <p className="text-spa-gray mb-6">
                At Hillar Massage, our mission is to promote wellness and balance through expert 
                therapeutic touch. We believe in the body's natural ability to heal and seek to 
                facilitate this process through our carefully crafted treatments.
              </p>
              <h3 className="text-xl font-bold text-spa-green-dark mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="text-spa-green mr-3 flex-shrink-0" size={20} />
                  <span>Client-centered care that prioritizes your unique needs</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-spa-green mr-3 flex-shrink-0" size={20} />
                  <span>Excellence in service through continuous education</span>
                </li>
                <li className="flex items-start">
                  <Globe className="text-spa-green mr-3 flex-shrink-0" size={20} />
                  <span>Holistic approach to health and wellness</span>
                </li>
                <li className="flex items-start">
                  <Book className="text-spa-green mr-3 flex-shrink-0" size={20} />
                  <span>Ethical practices and professional integrity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Expert Therapists",
              description: "Our licensed therapists bring years of experience and specialized training to every session.",
              icon: <Award className="h-10 w-10 text-spa-green mb-4" />
            },
            {
              title: "Personalized Approach",
              description: "We tailor each treatment to your specific needs and preferences for maximum benefit.",
              icon: <Heart className="h-10 w-10 text-spa-green mb-4" />
            },
            {
              title: "Continuous Growth",
              description: "We regularly update our techniques and offerings to incorporate the best practices in wellness.",
              icon: <Book className="h-10 w-10 text-spa-green mb-4" />
            }
          ].map((item, index) => (
            <Card key={index} className="border-spa-beige hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-spa-green-dark mb-2">{item.title}</h3>
                <p className="text-spa-gray">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
