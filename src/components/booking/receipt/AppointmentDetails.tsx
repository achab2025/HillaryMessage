
import React from 'react';
import { format } from 'date-fns';

interface AppointmentDetailsProps {
  selectedService: {
    name: string;
    duration: number;
    price: number;
  };
  selectedDate: Date | undefined;
  selectedTime: string;
  selectedTherapist: string;
  therapists: { id: string; name: string }[];
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  selectedTherapist,
  therapists
}) => {
  return (
    <div className="px-8 py-6 bg-white">
      <div className="space-y-4">
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
          <h3 className="text-sm font-medium text-green-800 mb-1">START DATE</h3>
          <p className="text-lg font-semibold text-green-900">
            {selectedDate ? format(selectedDate, "EEE MMMM do, h:mma") : ""}
          </p>
          <p className="text-sm text-green-700">
            123 Wellness Avenue, Therapy District, TD 10101
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
          <h3 className="text-sm font-medium text-blue-800 mb-1">SERVICE DETAILS</h3>
          <p className="text-lg font-semibold text-blue-900">{selectedService?.name}</p>
          <p className="text-sm text-blue-700">
            Duration: {selectedService?.duration} minutes • Therapist: {therapists.find(t => t.id === selectedTherapist)?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
