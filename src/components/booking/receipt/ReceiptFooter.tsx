
import React from 'react';

interface ReceiptFooterProps {
  bookingDate: string;
}

const ReceiptFooter: React.FC<ReceiptFooterProps> = ({ bookingDate }) => {
  return (
    <div className="px-8 py-8 bg-white text-center border-t border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Have a Question?</h3>
      
      <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mb-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Go to FAQ</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Give us a call</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Message us</p>
        </div>
      </div>
      
      <div className="space-y-2 text-xs text-gray-500">
        <p>Contact | Unsubscribe | View in Browser</p>
        <p>Hillary Massage, 123 Wellness Avenue, TD 10101 • info@hillarymassage.com</p>
      </div>
    </div>
  );
};

export default ReceiptFooter;
