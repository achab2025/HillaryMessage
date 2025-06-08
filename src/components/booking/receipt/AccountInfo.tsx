
import React from 'react';

interface AccountInfoProps {
  guestInfo: {
    email: string;
  };
  generatedPassword: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ guestInfo, generatedPassword }) => {
  return (
    <div className="px-8 py-6 bg-blue-50 border-l-4 border-blue-500">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Account Information</h3>
      <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
        <p className="text-slate-600 mb-4">An account has been created for you:</p>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-700 min-w-[60px]">Email:</span>
            <span className="text-slate-900 bg-slate-50 px-3 py-1 rounded-lg">{guestInfo.email}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-700 min-w-[60px]">Password:</span>
            <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-lg font-mono text-sm">{generatedPassword}</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 italic">Please save these credentials and change your password after first login.</p>
      </div>
    </div>
  );
};

export default AccountInfo;
