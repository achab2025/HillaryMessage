
import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, FileText, Download, Mail } from "lucide-react";
import { format } from "date-fns";
import { useBooking } from '@/contexts/BookingContext';
import BookingReceipt from './BookingReceipt';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useToast } from '@/components/ui/use-toast';

interface BookingConfirmationProps {
  bookingComplete: boolean;
  selectedService: any;
  selectedDate: Date | undefined;
  selectedTime: string;
  selectedTherapist: string;
  therapists: any[];
  guestInfo: any;
  generatedPassword: string;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  bookingComplete,
  selectedService,
  selectedDate,
  selectedTime,
  selectedTherapist,
  therapists,
  guestInfo,
  generatedPassword
}) => {
  const { formatCurrency } = useBooking();
  const { toast } = useToast();
  const receiptRef = useRef<HTMLDivElement>(null);

  const downloadReceipt = async () => {
    if (!receiptRef.current) return;
    
    try {
      console.log('Starting PDF generation...');
      
      // Create a temporary container with proper styling for PDF generation
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '800px';
      tempContainer.style.background = 'white';
      tempContainer.style.padding = '40px';
      tempContainer.innerHTML = receiptRef.current.innerHTML;
      
      document.body.appendChild(tempContainer);
      
      // Use html2canvas to create a canvas from the receipt
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        width: 800,
        height: tempContainer.scrollHeight + 80
      });
      
      // Clean up temporary container
      document.body.removeChild(tempContainer);
      
      console.log('Canvas created, dimensions:', canvas.width, 'x', canvas.height);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Get PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate scaling to fit the image in the PDF with some margin
      const margin = 15;
      const availableWidth = pdfWidth - (2 * margin);
      const availableHeight = pdfHeight - (2 * margin);
      
      // Calculate the aspect ratio
      const imgAspectRatio = canvas.width / canvas.height;
      
      let imgWidth, imgHeight;
      
      // Scale the image to fit within the available space
      if (availableWidth / availableHeight > imgAspectRatio) {
        // Height is the limiting factor
        imgHeight = availableHeight;
        imgWidth = imgHeight * imgAspectRatio;
      } else {
        // Width is the limiting factor
        imgWidth = availableWidth;
        imgHeight = imgWidth / imgAspectRatio;
      }
      
      // Center the image
      const imgX = (pdfWidth - imgWidth) / 2;
      const imgY = margin;
      
      console.log('PDF dimensions:', pdfWidth, 'x', pdfHeight);
      console.log('Image position:', imgX, imgY);
      console.log('Image size:', imgWidth, 'x', imgHeight);
      
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
      
      // Generate filename with current date
      const currentDate = format(new Date(), 'yyyy-MM-dd');
      const filename = `SereneTouch_Receipt_${guestInfo.lastName}_${currentDate}.pdf`;
      
      pdf.save(filename);
      
      toast({
        title: "Receipt Downloaded",
        description: "Your booking receipt has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Download Failed",
        description: "There was an issue downloading your receipt. Please try again.",
        variant: "destructive",
      });
    }
  };

  const sendEmailWithReceipt = () => {
    // In a real application, this would send an API request to your backend
    // For this demo, we'll just show a toast confirmation
    toast({
      title: "Email Sent",
      description: `Your receipt has been sent to ${guestInfo.email}`,
    });
  };

  if (bookingComplete) {
    return (
      <div className="text-center py-6 sm:py-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-spa-cream text-spa-green mb-4">
          <Check className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-xl font-medium mb-2 text-spa-green-dark">Booking Complete!</h3>
        <p className="text-muted-foreground mb-6">
          Your appointment has been scheduled successfully.
        </p>
        
        <div className="bg-spa-cream p-4 sm:p-6 max-w-md mx-auto rounded-lg border border-spa-beige text-left mb-6">
          <h4 className="text-lg font-semibold mb-3 text-spa-green-dark flex items-center">
            Your Account Has Been Created
          </h4>
          <p className="mb-2 text-sm sm:text-base">
            <span className="font-medium">Email:</span> {guestInfo.email}
          </p>
          <p className="mb-4 text-sm sm:text-base">
            <span className="font-medium">Password:</span> {generatedPassword}
          </p>
          <div className="text-xs sm:text-sm text-spa-green-dark bg-white p-3 rounded-md border border-spa-beige">
            We've automatically created an account for you using the information you provided. 
            Please save these credentials to access your account dashboard and manage your appointments.
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 justify-center mb-6">
          <Button 
            onClick={downloadReceipt}
            className="bg-spa-green hover:bg-spa-green-dark flex items-center transition-all duration-300 transform hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
          <Button 
            variant="outline" 
            onClick={sendEmailWithReceipt}
            className="border-spa-beige hover:bg-spa-cream text-spa-green-dark"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Receipt
          </Button>
        </div>
        
        <div className="absolute left-[-9999px] top-0">
          <div ref={receiptRef}>
            <BookingReceipt
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedTherapist={selectedTherapist}
              therapists={therapists}
              guestInfo={guestInfo}
              generatedPassword={generatedPassword}
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          You'll be redirected to login page in a moment...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-spa-beige">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Service:</span>
              <span className="text-right">{selectedService?.name}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Date:</span>
              <span className="text-right">{selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Time:</span>
              <span className="text-right">{selectedTime}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Therapist:</span>
              <span className="text-right">
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Duration:</span>
              <span className="text-right">{selectedService?.duration} minutes</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Name:</span>
              <span className="text-right">{guestInfo.firstName} {guestInfo.lastName}</span>
            </div>
            <div className="flex flex-wrap justify-between border-b border-spa-beige pb-2">
              <span className="font-medium text-spa-green-dark">Contact:</span>
              <span className="text-right text-sm sm:text-base">{guestInfo.email} | {guestInfo.phone}</span>
            </div>
            <div className="flex flex-wrap justify-between text-lg font-medium">
              <span className="text-spa-green-dark">Total:</span>
              <span className="text-spa-green">
                {formatCurrency(selectedService?.price || 0)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-spa-cream border border-spa-beige rounded-lg p-4 text-xs sm:text-sm text-spa-green-dark">
        <p>
          <strong>Note:</strong> By confirming your booking, you agree to our terms and conditions.
        </p>
        <p className="mt-2">
          We'll automatically create an account for you so you can manage your appointments. 
          Your login credentials will be displayed after booking is complete.
        </p>
        <p className="mt-2">
          A receipt will be generated and sent to your email once your booking is confirmed.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
