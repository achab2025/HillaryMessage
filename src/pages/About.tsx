
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Book, Heart, Award, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/App";

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation isLoggedIn={isLoggedIn} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-spa-green/90 via-spa-green-dark/80 to-spa-green/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470"
            alt="About Hillar Massage Hero"
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
              <span className="text-sm font-medium text-spa-cream">Our Story & Values</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-lora animate-fade-in text-white">
              About <span className="text-spa-cream italic">Hillar Massage</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-spa-cream to-white mx-auto mb-8 rounded-full animate-fade-in"></div>
            
            <p className="text-lg md:text-xl mb-8 text-spa-cream/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              A sanctuary of relaxation where ancient techniques meet modern comfort. 
              Our journey began with a simple philosophy: everyone deserves the healing touch of massage therapy.
            </p>
            
            <p className="text-base mb-12 text-spa-cream/80 max-w-xl mx-auto animate-fade-in">
              Founded in 2010, we've grown into a respected wellness center committed to 
              personalized care and exceptional therapeutic experiences for each client.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/book-now">
                <Button 
                  size="lg" 
                  className="bg-spa-cream hover:bg-white text-spa-green-dark text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Experience Our Care
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#about-content">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-spa-green-dark text-lg px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <div id="about-content">
        <section className="bg-spa-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 bg-spa-green/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-spa-green" />
                <span className="text-sm font-medium text-spa-green-dark">Our Mission & Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-spa-green-dark mb-4">
                Dedicated to Your Wellness Journey
              </h2>
              <div className="w-16 h-1 bg-spa-green mx-auto mb-6"></div>
              <p className="text-spa-gray max-w-3xl mx-auto">
                We believe in the body's natural ability to heal and seek to 
                facilitate this process through our carefully crafted treatments and expert care.
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
                  <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Massage therapist working" className="w-full h-full object-cover" />
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
              {[{
                title: "Expert Therapists",
                description: "Our licensed therapists bring years of experience and specialized training to every session.",
                icon: <Award className="h-10 w-10 text-spa-green mb-4" />
              }, {
                title: "Personalized Approach",
                description: "We tailor each treatment to your specific needs and preferences for maximum benefit.",
                icon: <Heart className="h-10 w-10 text-spa-green mb-4" />
              }, {
                title: "Continuous Growth",
                description: "We regularly update our techniques and offerings to incorporate the best practices in wellness.",
                icon: <Book className="h-10 w-10 text-spa-green mb-4" />
              }].map((item, index) => (
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
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
