
import React from 'react';
import { format } from 'date-fns';
import { useBooking } from '@/contexts/BookingContext';
import { CheckCircle, Phone, Mail, MapPin, Clock, User, Calendar, CreditCard } from 'lucide-react';

interface BookingReceiptProps {
  selectedService: any;
  selectedDate: Date | undefined;
  selectedTime: string;
  selectedTherapist: string;
  therapists: any[];
  guestInfo: any;
  generatedPassword: string;
}

const BookingReceipt: React.FC<BookingReceiptProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  selectedTherapist,
  therapists,
  guestInfo,
  generatedPassword
}) => {
  const { formatCurrency } = useBooking();
  
  const bookingDate = new Date().toISOString();
  const receiptId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return (
    <div className="bg-white max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header with Company Branding */}
      <div className="bg-gradient-to-r from-spa-green to-spa-green-dark text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Serene Touch Spa</h1>
              <p className="text-spa-cream/90 text-lg">Your wellness sanctuary</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm text-spa-cream/80">Receipt #</p>
                <p className="text-xl font-bold">{receiptId}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2 text-spa-cream">Contact Information</h3>
              <div className="space-y-1 text-spa-cream/90">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+233 (0) 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@serenetouchspa.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Relaxation Avenue, Wellness City, WC 10101</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-spa-cream">Business Details</h3>
              <div className="space-y-1 text-spa-cream/90">
                <p>VAT Registration: GH123456789</p>
                <p>License: SPA/2024/001</p>
                <p>Date: {format(new Date(bookingDate), 'MMM dd, yyyy')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 rounded-full p-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Booking Confirmed!</h2>
            <p className="text-gray-600">Thank you for choosing Serene Touch Spa</p>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="px-8 py-6 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-spa-green" />
          Client Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium text-gray-900">{guestInfo.firstName} {guestInfo.lastName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium text-gray-900">{guestInfo.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium text-gray-900">{guestInfo.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Booking Date</p>
            <p className="font-medium text-gray-900">{format(new Date(bookingDate), 'MMM dd, yyyy HH:mm')}</p>
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="px-8 py-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-spa-green" />
          Appointment Details
        </h3>
        
        <div className="bg-spa-cream/30 rounded-lg p-6 mb-6">
          <div className="grid gap-4">
            <div className="flex justify-between items-center py-3 border-b border-spa-beige/50">
              <span className="text-gray-600 font-medium">Service</span>
              <span className="font-semibold text-gray-900">{selectedService?.name}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-spa-beige/50">
              <span className="text-gray-600 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </span>
              <span className="font-semibold text-gray-900">
                {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-spa-beige/50">
              <span className="text-gray-600 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </span>
              <span className="font-semibold text-gray-900">{selectedTime}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-spa-beige/50">
              <span className="text-gray-600 font-medium">Therapist</span>
              <span className="font-semibold text-gray-900">
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 font-medium">Duration</span>
              <span className="font-semibold text-gray-900">{selectedService?.duration} minutes</span>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 rounded-lg p-6 border border-spa-green/20">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-spa-green" />
            Payment Summary
          </h4>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium text-gray-900">{formatCurrency(selectedService?.price || 0)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax (VAT 15%)</span>
              <span className="font-medium text-gray-900">{formatCurrency((selectedService?.price || 0) * 0.15)}</span>
            </div>
            <div className="border-t border-spa-green/20 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                <span className="text-xl font-bold text-spa-green">
                  {formatCurrency((selectedService?.price || 0) * 1.15)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="px-8 py-6 bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Account Information</h3>
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-gray-600 mb-2">An account has been created for you:</p>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-gray-700">Email: </span>
              <span className="text-sm text-gray-900">{guestInfo.email}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Temporary Password: </span>
              <span className="text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded font-mono">{generatedPassword}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Please save these credentials and change your password after first login.</p>
        </div>
      </div>

      {/* Important Information */}
      <div className="px-8 py-6 bg-amber-50 border-l-4 border-amber-500">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Information</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Please arrive 15 minutes before your appointment time</li>
          <li>• Bring a valid ID for verification</li>
          <li>• Cancellations must be made at least 24 hours in advance</li>
          <li>• We will send you a reminder 24 hours before your appointment</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 bg-gray-900 text-white">
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-spa-cream">Thank You for Choosing Serene Touch Spa</h3>
          <p className="text-gray-300">We look forward to providing you with an exceptional wellness experience</p>
          
          <div className="border-t border-gray-700 pt-4 mt-4">
            <p className="text-xs text-gray-400">
              This is an automated receipt generated on {format(new Date(bookingDate), 'MMM dd, yyyy')} at {format(new Date(bookingDate), 'HH:mm')}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              For any queries, please contact us at info@serenetouchspa.com or +233 (0) 123 456 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;
