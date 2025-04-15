
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
}

interface ServiceSelectorProps {
  services: Service[];
  selectedService: Service | null;
  setSelectedService: (service: Service) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services,
  selectedService,
  setSelectedService
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => (
        <Card 
          key={service.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md overflow-hidden",
            selectedService?.id === service.id ? "ring-2 ring-violet-500" : ""
          )}
          onClick={() => setSelectedService(service)}
        >
          <div className={cn("h-24 w-full", service.image)} />
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between">
              <span>{service.name}</span>
              <span className="text-violet-600 font-normal">
                {formatCurrency(service.price)}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{service.description}</p>
            <p className="text-sm mt-2 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-violet-500" />
              {service.duration} minutes
            </p>
          </CardContent>
          {selectedService?.id === service.id && (
            <div className="absolute top-4 right-4 bg-violet-600 text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ServiceSelector;
