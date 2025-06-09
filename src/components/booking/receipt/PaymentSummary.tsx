
import React from 'react';

interface PaymentSummaryProps {
  selectedService: {
    name: string;
    price: number;
  };
  formatCurrency: (amount: number) => string;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ selectedService, formatCurrency }) => {
  const servicePrice = selectedService?.price || 0;
  const tax = servicePrice * 0.15;
  const total = servicePrice + tax;

  return (
    <div className="px-8 py-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Your Receipt</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">ITEM DESCRIPTION</span>
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">PRICE</span>
        </div>
        
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-900">{selectedService?.name || 'Massage Service'}</span>
          <span className="text-gray-900">{formatCurrency(servicePrice)}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600">Tax and Fees</span>
          <span className="text-gray-600">{formatCurrency(tax)}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600">Insurance Add-on</span>
          <span className="text-gray-600">{formatCurrency(0)}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-green-600">First Time Client Discount</span>
          <span className="text-green-600">-{formatCurrency(0)}</span>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white rounded-lg p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-semibold">VISA</div>
          <span className="text-sm">Card ending in •••• 1234</span>
        </div>
        <span className="text-xl font-bold">{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default PaymentSummary;
