
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
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
    <Card className="group overflow-hidden transition-all duration-200 hover:shadow-lg h-full flex flex-col">
      <div className="relative overflow-hidden bg-muted">
        <div 
          className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex-1 space-y-2 mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <span className="text-base font-semibold text-foreground">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
          </div>
          
          <Link to="/book-now">
            <Button 
              variant="outline" 
              size="sm"
              className="h-8 text-xs"
            >
              Book
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
