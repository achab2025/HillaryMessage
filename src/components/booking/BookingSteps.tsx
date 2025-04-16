
import React from "react";
import { cn } from "@/lib/utils";

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={cn(
              "text-sm font-medium text-center flex-1",
              currentStep > index + 1 ? "text-violet-600" : 
              currentStep === index + 1 ? "text-violet-600" : "text-muted-foreground"
            )}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-violet-500 to-purple-600 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep - 1) * 20}%` }}
        />
      </div>
    </div>
  );
};

export default BookingSteps;
