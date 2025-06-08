
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ReceiptConfirmation: React.FC = () => {
  return (
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
  );
};

export default ReceiptConfirmation;
