
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-spa-green/80 to-spa-green-dark/80" />
        <img
          src="/lovable-uploads/b5cf5200-2841-4228-8d6e-3d4386ff29d5.png"
          alt="Spa background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 pt-20 text-left text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-lora">
            Территория <span className="text-spa-cream">умиротворения</span> и красоты
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-spa-cream max-w-2xl">
            Откройте для себя убежище спокойствия, где опытные терапевты помогут вам 
            обрести баланс, облегчение и глубокую релаксацию благодаря нашим 
            высококачественным спа-услугам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-spa-green hover:bg-spa-green-dark text-lg px-8">
                Записаться на прием
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="#services">
              <Button size="lg" variant="outline" 
                className="border-white text-white hover:bg-white/20 text-lg px-8">
                Наши услуги
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
