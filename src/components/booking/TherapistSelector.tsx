
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBooking } from '@/contexts/BookingContext';
import { Therapist } from '@/data/bookingMockData';

interface TherapistSelectorProps {
  therapists: Therapist[];
  selectedTherapist: string;
  setSelectedTherapist: (id: string) => void;
}

const TherapistSelector: React.FC<TherapistSelectorProps> = ({ 
  therapists,
  selectedTherapist,
  setSelectedTherapist
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {therapists.map((therapist) => (
        <Card 
          key={therapist.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md border relative",
            selectedTherapist === therapist.id 
              ? "ring-2 ring-spa-green border-spa-green" 
              : "border-spa-beige hover:border-spa-green"
          )}
          onClick={() => setSelectedTherapist(therapist.id)}
        >
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-spa-cream to-spa-beige mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl text-spa-green font-bold">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-medium text-base sm:text-lg text-spa-green-dark">{therapist.name}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{therapist.specialization}</p>
            </div>
          </CardContent>
          {selectedTherapist === therapist.id && (
            <div className="absolute top-4 right-4 bg-spa-green text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default TherapistSelector;
