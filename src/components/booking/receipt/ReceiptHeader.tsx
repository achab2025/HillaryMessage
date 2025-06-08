
import React from 'react';
import { format } from 'date-fns';

interface ReceiptHeaderProps {
  receiptId: string;
  bookingDate: string;
}

const ReceiptHeader: React.FC<ReceiptHeaderProps> = ({ receiptId, bookingDate }) => {
  return (
    <div className="bg-white px-8 py-8 text-center border-b border-gray-100">
      <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Your appointment is confirmed at Hillary Massage</h1>
      <p className="text-gray-500 text-sm">
        Receipt #{receiptId} • {format(new Date(bookingDate), 'MMM dd, yyyy')}
      </p>
    </div>
  );
};

export default ReceiptHeader;
