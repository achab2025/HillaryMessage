
import React from 'react';

const Guidelines: React.FC = () => {
  return (
    <div className="px-8 py-6 bg-white border-t border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Important Guidelines</h3>
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Arrive 15 minutes before your appointment for check-in</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Bring valid ID for verification</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>24-hour cancellation policy applies</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Reminder will be sent 24 hours prior to appointment</span>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
