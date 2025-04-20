
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-8">
      <div className="hidden md:flex justify-between mb-2">
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
      
      {/* Mobile step indicator */}
      <div className="md:hidden text-center mb-4">
        <span className="text-violet-600 font-medium">
          Step {currentStep} of {steps.length}
        </span>
        <p className="text-lg font-semibold mt-1">
          {steps[currentStep - 1]}
        </p>
      </div>
      
      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-violet-500 to-purple-600 h-full transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep - 1) * (100 / (steps.length - 1))}%` }}
        />
      </div>
      
      {/* Step circles */}
      <div className="hidden md:flex justify-between mt-1 relative">
        <div className="absolute top-2 left-0 right-0 h-0.5 bg-muted -z-10" />
        {steps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center z-10 transition-all duration-300",
              currentStep > index + 1 
                ? "bg-violet-600 text-white" 
                : currentStep === index + 1 
                ? "bg-violet-600 text-white ring-2 ring-purple-200" 
                : "bg-muted"
            )}
          >
            {currentStep > index + 1 && (
              <Check className="h-3 w-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
