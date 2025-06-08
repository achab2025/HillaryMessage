
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
    <div className="bg-white max-w-2xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Modern Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-8 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Hillary Massage</h1>
            <p className="text-slate-300 text-lg font-light">Professional Wellness & Therapy</p>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-xs text-slate-300 mb-1">Receipt #</p>
              <p className="text-xl font-bold tracking-wide">{receiptId}</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-200 mb-3 text-base">Contact Information</h3>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-4 h-4 text-slate-400" />
              <span>+233 (0) 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>info@hillarymassage.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>123 Wellness Avenue, Therapy District, TD 10101</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-200 mb-3 text-base">Business Details</h3>
            <div className="space-y-2 text-slate-300">
              <p>VAT: GH123456789</p>
              <p>License: MT/2024/001</p>
              <p>Date: {format(new Date(bookingDate), 'MMM dd, yyyy')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Confirmation */}
      <div className="px-8 py-6 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-100 rounded-full p-3">
            <CheckCircle className="w-7 h-7 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Booking Confirmed</h2>
            <p className="text-slate-600">Thank you for choosing Hillary Massage</p>
          </div>
        </div>
      </div>

      {/* Client Details */}
      <div className="px-8 py-8 bg-slate-50">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <User className="w-6 h-6 text-slate-600" />
          Client Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Full Name</p>
            <p className="text-lg font-semibold text-slate-900">{guestInfo.firstName} {guestInfo.lastName}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Email</p>
            <p className="text-lg text-slate-900">{guestInfo.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Phone</p>
            <p className="text-lg text-slate-900">{guestInfo.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Booking Date</p>
            <p className="text-lg text-slate-900">{format(new Date(bookingDate), 'MMM dd, yyyy HH:mm')}</p>
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="px-8 py-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-slate-600" />
          Appointment Details
        </h3>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="divide-y divide-slate-100">
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-slate-600 font-medium">Service</span>
              <span className="text-lg font-bold text-slate-900">{selectedService?.name}</span>
            </div>
            
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-slate-600 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </span>
              <span className="text-lg font-semibold text-slate-900">
                {selectedDate ? format(selectedDate, "EEEE, MMM do, yyyy") : ""}
              </span>
            </div>
            
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-slate-600 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </span>
              <span className="text-lg font-semibold text-slate-900">{selectedTime}</span>
            </div>
            
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-slate-600 font-medium">Therapist</span>
              <span className="text-lg font-semibold text-slate-900">
                {therapists.find(t => t.id === selectedTherapist)?.name}
              </span>
            </div>
            
            <div className="flex justify-between items-center px-6 py-5">
              <span className="text-slate-600 font-medium">Duration</span>
              <span className="text-lg font-semibold text-slate-900">{selectedService?.duration} minutes</span>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-slate-600" />
            Payment Summary
          </h4>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Service Fee</span>
              <span className="text-lg font-medium text-slate-900">{formatCurrency(selectedService?.price || 0)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Tax (VAT 15%)</span>
              <span className="text-lg font-medium text-slate-900">{formatCurrency((selectedService?.price || 0) * 0.15)}</span>
            </div>
            <div className="border-t border-slate-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-slate-900">Total Amount</span>
                <span className="text-2xl font-bold text-emerald-600">
                  {formatCurrency((selectedService?.price || 0) * 1.15)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="px-8 py-6 bg-blue-50 border-l-4 border-blue-500">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Account Information</h3>
        <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
          <p className="text-slate-600 mb-4">An account has been created for you:</p>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-slate-700 min-w-[60px]">Email:</span>
              <span className="text-slate-900 bg-slate-50 px-3 py-1 rounded-lg">{guestInfo.email}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-slate-700 min-w-[60px]">Password:</span>
              <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-lg font-mono text-sm">{generatedPassword}</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic">Please save these credentials and change your password after first login.</p>
        </div>
      </div>

      {/* Guidelines */}
      <div className="px-8 py-6 bg-amber-50 border-l-4 border-amber-400">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Important Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Arrive 15 minutes before your appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Bring valid ID for verification</span>
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>24-hour cancellation policy applies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Reminder sent 24 hours prior</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-8 bg-slate-900 text-white">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Thank You for Choosing Hillary Massage</h3>
          <p className="text-slate-300 text-lg">We look forward to your wellness journey with us</p>
          
          <div className="border-t border-slate-700 pt-6 mt-6 space-y-2">
            <p className="text-xs text-slate-400">
              Receipt generated on {format(new Date(bookingDate), 'MMM dd, yyyy')} at {format(new Date(bookingDate), 'HH:mm')}
            </p>
            <p className="text-xs text-slate-400">
              For inquiries: info@hillarymassage.com | +233 (0) 123 456 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;
