
import React from 'react';
import { format } from 'date-fns';
import { User } from 'lucide-react';

interface ClientDetailsProps {
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  bookingDate: string;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ guestInfo, bookingDate }) => {
  return (
    <div className="px-8 py-8 bg-slate-50">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <User className="w-6 h-6 text-slate-600" />
        Client Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Full Name</p>
          <p className="text-lg font-semibold text-slate-900">{guestInfo.firstName} {guestInfo.lastName}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Email</p>
          <p className="text-lg text-slate-900">{guestInfo.email}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Phone</p>
          <p className="text-lg text-slate-900">{guestInfo.phone}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Booking Date</p>
          <p className="text-lg text-slate-900">{format(new Date(bookingDate), 'MMM dd, yyyy HH:mm')}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
