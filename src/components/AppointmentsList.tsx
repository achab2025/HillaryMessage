
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  therapist: string;
  status: string;
}

interface AppointmentsListProps {
  appointments: Appointment[];
  title: string;
  emptyMessage: string;
  showActions?: boolean;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({
  appointments,
  title,
  emptyMessage,
  showActions = true,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <Card key={appointment.id} className="card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-medium">{appointment.service}</h3>
                  <p className="text-muted-foreground">
                    {formatDate(appointment.date)} at {appointment.time}
                  </p>
                  <p className="mt-1">Duration: {appointment.duration} minutes</p>
                  <p>Therapist: {appointment.therapist}</p>
                </div>
                {showActions && (
                  <div className="mt-4 md:mt-0 flex space-x-2">
                    {appointment.status === "upcoming" ? (
                      <>
                        <Button variant="outline">Reschedule</Button>
                        <Button variant="destructive">Cancel</Button>
                      </>
                    ) : (
                      <Button variant="outline">Book Again</Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="mb-4">{emptyMessage}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentsList;
