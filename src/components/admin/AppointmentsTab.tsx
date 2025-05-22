
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-medium">Upcoming Appointments</h3>
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Client</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Service</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date & Time</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Therapist</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-muted/20">
                  <td className="px-4 py-3 text-sm">{appointment.client}</td>
                  <td className="px-4 py-3 text-sm">{appointment.service}</td>
                  <td className="px-4 py-3 text-sm">
                    {formatDate(appointment.date)}<br />
                    {appointment.time} ({appointment.duration}min)
                  </td>
                  <td className="px-4 py-3 text-sm">{appointment.therapist}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-500">Cancel</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-muted-foreground">
                  No appointments found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
