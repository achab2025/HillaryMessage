
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  handleSubmit: () => void;
  bookingComplete: boolean;
  disableNext: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  handlePrevStep,
  handleNextStep,
  handleSubmit,
  bookingComplete,
  disableNext
}) => {
  return (
    <div className="flex justify-between p-6 bg-muted/20 border-t border-violet-100/50">
      {currentStep > 1 && !bookingComplete && (
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          className="group hover:border-violet-400 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-violet-500" />
          Back
        </Button>
      )}
      {currentStep < 6 && (
        <Button 
          className={`ml-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-all duration-300 ${disableNext ? "opacity-50" : ""}`}
          onClick={handleNextStep}
          disabled={disableNext}
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
      {currentStep === 6 && !bookingComplete && (
        <Button 
          className="ml-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      )}
      {bookingComplete && (
        <div className="w-full text-center mt-2">
          <p className="text-sm text-muted-foreground animate-pulse">
            Redirecting to login in a few seconds...
          </p>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
