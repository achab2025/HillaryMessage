
import React from 'react';

interface AccountInfoProps {
  guestInfo: {
    email: string;
  };
  generatedPassword: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ guestInfo, generatedPassword }) => {
  return (
    <div className="px-8 py-6 bg-white border-t border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Your Account Credentials</h3>
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div>
          <span className="text-sm font-medium text-gray-600">Email:</span>
          <div className="bg-white border border-gray-200 rounded px-3 py-2 mt-1">
            <span className="text-gray-900">{guestInfo.email}</span>
          </div>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-600">Password:</span>
          <div className="bg-white border border-gray-200 rounded px-3 py-2 mt-1">
            <span className="text-gray-900 font-mono">{generatedPassword}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Please save these credentials and change your password after first login.
        </p>
      </div>
    </div>
  );
};

export default AccountInfo;
