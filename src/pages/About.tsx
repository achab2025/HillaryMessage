
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Book, Heart, Award, Globe, Sparkles, ArrowRight, Users, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/App";

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-spa-cream/30 to-spa-beige/20">
      <Navigation isLoggedIn={isLoggedIn} />
      
      {/* Hero Section - Redesigned */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-green/95 via-spa-green-dark/90 to-spa-green/95 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470"
            alt="About Hillar Massage Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle floating elements */}
        <div className="absolute inset-0 z-5 opacity-10">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-white rounded-full blur-2xl animate-floating"></div>
          <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-spa-cream rounded-full blur-2xl animate-floating" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-20 mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-8 py-3 mb-8 animate-fade-in border border-white/20">
              <Sparkles className="h-5 w-5 text-spa-cream" />
              <span className="text-sm font-medium text-spa-cream tracking-wide">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-lora animate-fade-in text-white">
              About <span className="text-spa-cream italic font-light">Hillar Massage</span>
            </h1>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-spa-cream to-transparent mx-auto mb-10 animate-fade-in"></div>
            
            <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
              Where ancient healing wisdom meets contemporary wellness philosophy
            </p>
            
            <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in font-light">
              Since 2010, we've been dedicated to creating transformative experiences through the art of therapeutic touch
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Link to="/book-now">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-spa-cream text-spa-green-dark text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-full font-medium"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - New */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-spa-green/10 rounded-full px-6 py-2 mb-8">
              <Heart className="h-4 w-4 text-spa-green" />
              <span className="text-sm font-medium text-spa-green-dark tracking-wide">Our Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-spa-green-dark mb-8 font-lora">
              Wellness Through Intention
            </h2>
            <p className="text-xl text-spa-gray leading-relaxed font-light">
              We believe that true wellness emerges from the harmony of mind, body, and spirit. 
              Every treatment is designed not just to relax, but to restore your natural balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Heart className="h-12 w-12 text-spa-green mb-6" />,
                title: "Mindful Touch",
                description: "Every gesture is intentional, every movement purposeful in creating your healing experience."
              },
              {
                icon: <Globe className="h-12 w-12 text-spa-green mb-6" />,
                title: "Holistic Approach",
                description: "We address the whole person, understanding that wellness extends beyond the physical."
              },
              {
                icon: <Sparkles className="h-12 w-12 text-spa-green mb-6" />,
                title: "Natural Harmony",
                description: "Using only the finest natural ingredients to enhance your body's innate healing abilities."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-spa-cream/30 to-white border border-spa-beige/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-spa-green-dark mb-4">{item.title}</h3>
                <p className="text-spa-gray leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Mission Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-spa-green/5 to-spa-beige/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-spa-green/10 rounded-full px-6 py-2 mb-8">
                <Book className="h-4 w-4 text-spa-green" />
                <span className="text-sm font-medium text-spa-green-dark tracking-wide">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-spa-green-dark mb-8 font-lora leading-tight">
                A Story of <span className="italic font-light">Dedication</span>
              </h2>
              
              <div className="space-y-6 text-lg text-spa-gray leading-relaxed font-light">
                <p>
                  Founded in 2010 with a vision to bring authentic healing to our community, 
                  Hillar Massage has evolved into a sanctuary where traditional techniques 
                  meet modern wellness understanding.
                </p>
                <p>
                  Our journey began with a simple belief: that everyone deserves access to 
                  therapeutic touch that not only relaxes but truly heals. Today, we continue 
                  to honor this commitment through every treatment we provide.
                </p>
                <p>
                  What started as a small practice has grown into a respected wellness center, 
                  yet we've never lost sight of our core values: personalized care, 
                  authentic connection, and transformative results.
                </p>
              </div>

              <div className="mt-10">
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    className="border-2 border-spa-green text-spa-green hover:bg-spa-green hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Explore Our Treatments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-spa-green/20 to-transparent rounded-3xl z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Massage therapy session" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl z-20">
                  <h3 className="text-xl font-semibold text-spa-green-dark mb-2">Expert Care</h3>
                  <p className="text-spa-gray font-light">Over a decade of experience in therapeutic wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-spa-green/10 rounded-full px-6 py-2 mb-8">
              <Trophy className="h-4 w-4 text-spa-green" />
              <span className="text-sm font-medium text-spa-green-dark tracking-wide">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-spa-green-dark mb-8 font-lora">
              What Guides Us
            </h2>
            <p className="text-xl text-spa-gray leading-relaxed font-light">
              Our commitment to excellence is rooted in principles that shape every aspect of your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-white mb-4" />,
                title: "Compassionate Care",
                description: "Every client receives personalized attention tailored to their unique wellness needs",
                gradient: "from-rose-400 to-pink-500"
              },
              {
                icon: <Award className="h-10 w-10 text-white mb-4" />,
                title: "Professional Excellence",
                description: "Continuous education and training ensure we deliver the highest standards of service",
                gradient: "from-blue-400 to-indigo-500"
              },
              {
                icon: <Globe className="h-10 w-10 text-white mb-4" />,
                title: "Holistic Wellness",
                description: "We treat the whole person, addressing physical, mental, and emotional well-being",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                icon: <Book className="h-10 w-10 text-white mb-4" />,
                title: "Ethical Practice",
                description: "Integrity and professionalism guide every interaction and treatment we provide",
                gradient: "from-purple-400 to-violet-500"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-8 text-center`}>
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-spa-gray leading-relaxed font-light">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-20 bg-gradient-to-r from-spa-green to-spa-green-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                icon: <Users className="h-12 w-12 text-spa-cream mb-4 mx-auto" />,
                number: "10,000+",
                label: "Happy Clients"
              },
              {
                icon: <Clock className="h-12 w-12 text-spa-cream mb-4 mx-auto" />,
                number: "14+",
                label: "Years of Excellence"
              },
              {
                icon: <Trophy className="h-12 w-12 text-spa-cream mb-4 mx-auto" />,
                number: "25+",
                label: "Treatment Options"
              }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-spa-cream font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-spa-cream/50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-spa-green-dark mb-8 font-lora">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-spa-gray mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Experience the difference that personalized care and expert touch can make. 
              Book your appointment today and discover why our clients return again and again.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-now">
                <Button 
                  size="lg" 
                  className="bg-spa-green hover:bg-spa-green-dark text-white text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
                >
                  Schedule Your Visit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-spa-green text-spa-green hover:bg-spa-green hover:text-white text-lg px-10 py-4 rounded-full transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
