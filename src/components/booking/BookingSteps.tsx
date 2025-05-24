
import React from "react";
import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            {/* Step Circle */}
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 relative z-10",
              "border-2 mb-2",
              currentStep > index + 1 
                ? "bg-spa-green border-spa-green text-white shadow-lg shadow-spa-green/30 scale-110" 
                : currentStep === index + 1 
                ? "bg-spa-green-dark border-spa-green-dark text-white shadow-lg shadow-spa-green-dark/30 scale-110" 
                : "bg-white border-spa-beige text-spa-beige hover:border-spa-green/30 transition-colors duration-300"
            )}>
              {currentStep > index + 1 ? (
                <Check className="h-4 w-4 animate-scale-in" />
              ) : (
                <span className="text-xs font-bold">{index + 1}</span>
              )}
            </div>
            
            {/* Step Label */}
            <div className={cn(
              "text-xs sm:text-sm font-medium text-center px-1 transition-all duration-300",
              currentStep > index + 1 ? "text-spa-green" : 
              currentStep === index + 1 ? "text-spa-green-dark font-semibold" : "text-muted-foreground"
            )}>
              {step}
            </div>
            
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-0.5 -z-10">
                <div className="w-full h-full bg-spa-beige relative overflow-hidden">
                  <div 
                    className={cn(
                      "h-full bg-gradient-to-r from-spa-green to-spa-green-dark transition-all duration-500 ease-out",
                      currentStep > index + 1 ? "w-full" : "w-0"
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-spa-beige h-2 rounded-full overflow-hidden shadow-inner">
        <div 
          className="bg-gradient-to-r from-spa-green via-spa-green-dark to-spa-green h-full transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
