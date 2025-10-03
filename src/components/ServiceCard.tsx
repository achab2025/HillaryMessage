
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string | number;
  name: string;
  description: string;
  price: string | number;
  duration: string | number;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  description,
  price,
  duration,
  image,
}) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white via-spa-cream/30 to-spa-beige/20 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Sparkles className="h-4 w-4 text-spa-green" />
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-spa-green-dark group-hover:text-spa-green transition-colors duration-300">
            {name}
          </h3>
          <p className="text-spa-gray text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-spa-beige/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-spa-gray">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
            <div className="h-4 w-px bg-spa-beige" />
            <span className="text-lg font-bold text-spa-green">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
          </div>
          
          <Link to="/book-now">
            <Button 
              variant="outline" 
              size="sm"
              className="border-spa-green text-spa-green hover:bg-spa-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
