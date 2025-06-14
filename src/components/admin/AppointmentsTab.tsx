
import { Button } from "@/components/ui/button";
import { PlusCircle, Calendar, MessageSquare } from "lucide-react";

interface Appointment {
  id: string;
  client: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  therapist: string;
  status: string;
  smsStatus?: 'sent' | 'pending' | 'failed';
}

interface AppointmentsTabProps {
  appointments: Appointment[];
  formatDate: (dateString: string) => string;
}

export const AppointmentsTab = ({ appointments, formatDate }: AppointmentsTabProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{appointments.length} appointments</p>
        <Button size="sm" className="bg-spa-green hover:bg-spa-green-dark">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapist</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{appointment.client}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{appointment.service}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    <div className="space-y-1">
                      <div className="font-medium">{formatDate(appointment.date)}</div>
                      <div className="text-xs text-gray-500">{appointment.time} ({appointment.duration}min)</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{appointment.therapist}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className={`h-4 w-4 ${
                        appointment.smsStatus === 'sent' ? 'text-green-600' :
                        appointment.smsStatus === 'failed' ? 'text-red-600' :
                        'text-yellow-600'
                      }`} />
                      <span className={`text-xs ${
                        appointment.smsStatus === 'sent' ? 'text-green-600' :
                        appointment.smsStatus === 'failed' ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {appointment.smsStatus || 'pending'}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-900">Cancel</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center">
                  <div className="text-gray-500">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium">No appointments found</p>
                    <p className="text-sm">Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
