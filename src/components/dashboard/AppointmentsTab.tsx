
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, Calendar, Clock, User, CreditCard, MessageCircle, Download, Star
} from "lucide-react";

interface AppointmentsTabProps {
  upcomingAppointments: any[];
  pastAppointments: any[];
}

export const AppointmentsTab = ({ upcomingAppointments, pastAppointments }: AppointmentsTabProps) => {
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">My Appointments</h2>
        <Button asChild className="bg-gradient-to-r from-spa-blue to-spa-teal">
          <Link to="/booking">
            <Plus size={16} className="mr-2" />
            Book New
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-spa-beige/20 p-1 rounded-xl">
          <TabsTrigger value="upcoming" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
            Upcoming ({upcomingAppointments.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
            Past ({pastAppointments.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="border border-spa-beige/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{appointment.service}</h3>
                        <Badge className="bg-spa-green/20 text-spa-green">Confirmed</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <Calendar size={16} />
                            {formatDate(appointment.date)}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock size={16} />
                            {appointment.time} • {appointment.duration} minutes
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <User size={16} />
                            {appointment.therapist}
                          </p>
                          <p className="flex items-center gap-2">
                            <CreditCard size={16} />
                            ${appointment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" size="sm">
                        <Calendar size={16} className="mr-2" />
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle size={16} className="mr-2" />
                        Message
                      </Button>
                      <Button variant="destructive" size="sm">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="space-y-4">
            {pastAppointments.map((appointment) => (
              <Card key={appointment.id} className="border border-spa-beige/40">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{appointment.service}</h3>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <Calendar size={16} />
                            {formatDate(appointment.date)}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock size={16} />
                            {appointment.time} • {appointment.duration} minutes
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <User size={16} />
                            {appointment.therapist}
                          </p>
                          <p className="flex items-center gap-2">
                            <CreditCard size={16} />
                            ${appointment.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" size="sm">
                        <Download size={16} className="mr-2" />
                        Receipt
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star size={16} className="mr-2" />
                        Review
                      </Button>
                      <Button className="bg-spa-green hover:bg-spa-green-dark" size="sm">
                        Book Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
