
import React from 'react';

const ReceiptConfirmation: React.FC = () => {
  return (
    <div className="px-8 py-8 text-center bg-white">
      {/* Massage therapy illustration placeholder */}
      <div className="w-full h-32 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-8 flex items-center justify-center">
        <div className="text-6xl">🧘‍♀️</div>
      </div>
      
      <h2 className="text-lg font-medium text-gray-900 mb-4">First time booking with us?</h2>
      
      <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Account created with your details</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Login credentials provided below</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 9v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs text-gray-600">Appointment reminder sent via email</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptConfirmation;
