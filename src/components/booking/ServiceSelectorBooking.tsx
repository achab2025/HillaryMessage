
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Sparkles } from "lucide-react";
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
            "group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden border-2 relative",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-spa-green/10 before:to-spa-green-dark/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
            selectedService?.id === service.id 
              ? "ring-2 ring-spa-green border-spa-green shadow-lg shadow-spa-green/20 scale-105" 
              : "border-spa-beige hover:border-spa-green/50 hover:shadow-spa-green/10"
          )}
          onClick={() => setSelectedService(service)}
        >
          <div className="relative">
            <div className={cn("h-24 w-full transition-transform duration-300 group-hover:scale-110", service.image)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {selectedService?.id === service.id && (
              <div className="absolute top-2 right-2 bg-spa-green text-white rounded-full p-1.5 shadow-lg animate-scale-in">
                <Check className="h-3 w-3" />
              </div>
            )}
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="h-4 w-4 text-white drop-shadow-lg" />
            </div>
          </div>
          
          <CardHeader className="pb-2 pt-4 relative z-10">
            <CardTitle className="flex justify-between text-sm sm:text-base group-hover:text-spa-green-dark transition-colors duration-300">
              <span className="text-spa-green-dark font-semibold">{service.name}</span>
              <span className="text-spa-green font-bold bg-spa-cream px-2 py-1 rounded-full text-xs">
                {formatCurrency(service.price)}
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 group-hover:text-gray-700 transition-colors duration-300">
              {service.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs sm:text-sm flex items-center text-spa-green-dark">
                <Clock className="h-3 w-3 mr-1 text-spa-green group-hover:animate-pulse" />
                <span className="font-medium">{service.duration} minutes</span>
              </p>
              <div className="w-2 h-2 bg-spa-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
          </CardContent>
          
          {/* Animated border gradient */}
          <div className={cn(
            "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "bg-gradient-to-r from-spa-green via-spa-green-dark to-spa-green",
            "animate-pulse"
          )} style={{ padding: '1px', margin: '-1px' }}>
            <div className="h-full w-full bg-white rounded-lg" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSelectorBooking;
