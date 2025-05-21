
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBooking } from '@/contexts/BookingContext';
import { Service } from '@/data/bookingMockData';

interface ServiceSelectorBookingProps {
  services: Service[];
  selectedService: Service | null;
  setSelectedService: (service: Service) => void;
}

const ServiceSelectorBooking: React.FC<ServiceSelectorBookingProps> = ({
  services,
  selectedService,
  setSelectedService
}) => {
  const { formatCurrency } = useBooking();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {services.map((service) => (
        <Card 
          key={service.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md overflow-hidden border",
            selectedService?.id === service.id 
              ? "ring-2 ring-spa-green border-spa-green" 
              : "border-spa-beige hover:border-spa-green"
          )}
          onClick={() => setSelectedService(service)}
        >
          <div className={cn("h-24 w-full", service.image)} />
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="flex justify-between text-sm sm:text-base">
              <span className="text-spa-green-dark">{service.name}</span>
              <span className="text-spa-green font-normal">
                {formatCurrency(service.price)}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-xs sm:text-sm">{service.description}</p>
            <p className="text-xs sm:text-sm mt-2 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-spa-green" />
              {service.duration} minutes
            </p>
          </CardContent>
          {selectedService?.id === service.id && (
            <div className="absolute top-4 right-4 bg-spa-green text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ServiceSelectorBooking;
