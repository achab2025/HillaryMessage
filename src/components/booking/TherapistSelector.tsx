
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBooking, Therapist } from '@/contexts/BookingContext';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {therapists.map((therapist) => (
        <Card 
          key={therapist.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md border border-violet-100 relative",
            selectedTherapist === therapist.id ? "ring-2 ring-violet-500" : ""
          )}
          onClick={() => setSelectedTherapist(therapist.id)}
        >
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-100 to-purple-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-violet-600 font-bold">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-medium text-lg">{therapist.name}</h3>
              <p className="text-muted-foreground text-sm">{therapist.specialization}</p>
            </div>
          </CardContent>
          {selectedTherapist === therapist.id && (
            <div className="absolute top-4 right-4 bg-violet-600 text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default TherapistSelector;
