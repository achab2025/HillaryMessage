
import React from 'react';
import { format } from 'date-fns';

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
    <div className="px-8 py-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Client Information</h4>
          <p className="text-gray-600">{guestInfo.firstName} {guestInfo.lastName}</p>
          <p className="text-gray-600">{guestInfo.email}</p>
          <p className="text-gray-600">{guestInfo.phone}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Booking Details</h4>
          <p className="text-gray-600">Booked on {format(new Date(bookingDate), 'MMM dd, yyyy')}</p>
          <p className="text-gray-600">Confirmation sent to email</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
