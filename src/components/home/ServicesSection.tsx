import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";

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

export const ServicesSection = () => {
  return (
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
  );
};
