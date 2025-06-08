
import React from 'react';
import { format } from 'date-fns';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ReceiptHeaderProps {
  receiptId: string;
  bookingDate: string;
}

const ReceiptHeader: React.FC<ReceiptHeaderProps> = ({ receiptId, bookingDate }) => {
  return (
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
  );
};

export default ReceiptHeader;
