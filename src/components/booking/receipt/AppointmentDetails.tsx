
import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

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
    <div className="px-8 py-8">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <Calendar className="w-6 h-6 text-slate-600" />
        Appointment Details
      </h3>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="divide-y divide-slate-100">
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-slate-600 font-medium">Service</span>
            <span className="text-lg font-bold text-slate-900">{selectedService?.name}</span>
          </div>
          
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-slate-600 font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date
            </span>
            <span className="text-lg font-semibold text-slate-900">
              {selectedDate ? format(selectedDate, "EEEE, MMM do, yyyy") : ""}
            </span>
          </div>
          
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-slate-600 font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time
            </span>
            <span className="text-lg font-semibold text-slate-900">{selectedTime}</span>
          </div>
          
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-slate-600 font-medium">Therapist</span>
            <span className="text-lg font-semibold text-slate-900">
              {therapists.find(t => t.id === selectedTherapist)?.name}
            </span>
          </div>
          
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-slate-600 font-medium">Duration</span>
            <span className="text-lg font-semibold text-slate-900">{selectedService?.duration} minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
