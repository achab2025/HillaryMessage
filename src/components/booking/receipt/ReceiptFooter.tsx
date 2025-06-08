
import React from 'react';
import { format } from 'date-fns';

interface ReceiptFooterProps {
  bookingDate: string;
}

const ReceiptFooter: React.FC<ReceiptFooterProps> = ({ bookingDate }) => {
  return (
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
  );
};

export default ReceiptFooter;
