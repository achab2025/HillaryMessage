
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
    <Card className="overflow-hidden card-hover">
      <div 
        className="h-40 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{duration}</span>
            </div>
            <span className="text-spa-blue font-medium">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
          </div>
          <Link to="/booking">
            <Button variant="outline" size="sm">Book</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
