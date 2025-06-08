
import React from 'react';

const Guidelines: React.FC = () => {
  return (
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
  );
};

export default Guidelines;
