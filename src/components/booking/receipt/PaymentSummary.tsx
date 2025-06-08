
import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentSummaryProps {
  selectedService: {
    price: number;
  };
  formatCurrency: (amount: number) => string;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ selectedService, formatCurrency }) => {
  return (
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
  );
};

export default PaymentSummary;
