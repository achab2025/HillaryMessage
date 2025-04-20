
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PromoSection = () => {
  return (
    <section className="py-20 bg-spa-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Package: Summer Relaxation</h2>
              <p className="text-lg mb-8 text-spa-cream">
                Experience the ultimate relaxation with our summer package including a full body massage,
                facial treatment, and complimentary aromatherapy session.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>60-minute full body massage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>30-minute facial treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spa-cream rounded-full"></div>
                  <span>Complimentary aromatherapy</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-white text-spa-green-dark hover:bg-spa-cream">
                    Book Package
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/b5cf5200-2841-4228-8d6e-3d4386ff29d5.png"
                alt="Spa treatment package"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-spa-green text-white px-6 py-3 rounded-full">
                <span className="text-lg font-bold">Save 20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
