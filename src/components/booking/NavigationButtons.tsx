
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
    <div className="flex justify-between p-6 bg-muted/20">
      {currentStep > 1 && !bookingComplete && (
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      )}
      {currentStep < 6 && (
        <Button 
          className="ml-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
          onClick={handleNextStep}
          disabled={disableNext}
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
      {currentStep === 6 && !bookingComplete && (
        <Button 
          className="ml-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
          onClick={handleSubmit}
        >
          Confirm Booking
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
