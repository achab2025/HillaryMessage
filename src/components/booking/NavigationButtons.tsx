
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
    <div className="flex justify-between p-4 sm:p-6 bg-spa-cream/30">
      {currentStep > 1 && !bookingComplete && (
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          className="border-spa-beige hover:bg-spa-cream text-spa-green-dark"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      )}
      
      <div className="ml-auto">
        {currentStep < 6 && (
          <Button 
            className="bg-spa-green hover:bg-spa-green-dark"
            onClick={handleNextStep}
            disabled={disableNext}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
        {currentStep === 6 && !bookingComplete && (
          <Button 
            className="bg-spa-green hover:bg-spa-green-dark"
            onClick={handleSubmit}
          >
            Confirm Booking
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
