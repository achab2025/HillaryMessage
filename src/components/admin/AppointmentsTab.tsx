
import { Button } from "@/components/ui/button";
import { PlusCircle, Calendar } from "lucide-react";

interface Appointment {
  id: string;
  client: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  therapist: string;
  status: string;
}

interface AppointmentsTabProps {
  appointments: Appointment[];
  formatDate: (dateString: string) => string;
}

export const AppointmentsTab = ({ appointments, formatDate }: AppointmentsTabProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-spa-green/10">
      <div className="flex justify-between items-center p-6 border-b border-spa-green/10 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
        <h3 className="text-xl font-semibold text-spa-green">Upcoming Appointments</h3>
        <Button size="sm" className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green transition-all duration-300 shadow-md hover:shadow-lg">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Client</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Service</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Date & Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Therapist</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-spa-green/10">
            {appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <tr 
                  key={appointment.id} 
                  className="hover:bg-gradient-to-r hover:from-spa-green/5 hover:to-transparent transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 group-hover:text-spa-green transition-colors duration-300">{appointment.client}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{appointment.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="space-y-1">
                      <div className="font-medium">{formatDate(appointment.date)}</div>
                      <div className="text-xs text-muted-foreground">{appointment.time} ({appointment.duration}min)</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{appointment.therapist}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm
                      ${appointment.status === 'confirmed' ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800' : 
                        appointment.status === 'pending' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800' : 
                        'bg-gradient-to-r from-red-100 to-red-200 text-red-800'}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-spa-green/10 hover:text-spa-green transition-all duration-300">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-700 transition-all duration-300">Cancel</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <div className="text-muted-foreground">
                    <Calendar className="mx-auto h-12 w-12 text-spa-green/40 mb-4" />
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
