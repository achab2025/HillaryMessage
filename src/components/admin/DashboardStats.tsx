
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, CircleDollarSign, Mail } from "lucide-react";

interface DashboardStatsProps {
  appointmentsCount: number;
  customersCount: number;
  weeklyRevenue: string;
  unreadMessagesCount: number;
}

export const DashboardStats = ({
  appointmentsCount,
  customersCount,
  weeklyRevenue,
  unreadMessagesCount
}: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <Card className="card-hover">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex rounded-full p-3 bg-spa-blue/10 text-spa-blue mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-1">{appointmentsCount}</h3>
            <p className="text-muted-foreground">Total Appointments</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="card-hover">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex rounded-full p-3 bg-spa-teal/10 text-spa-teal mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-1">{customersCount}</h3>
            <p className="text-muted-foreground">Total Customers</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="card-hover">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex rounded-full p-3 bg-spa-green/10 text-spa-green mb-4">
              <CircleDollarSign size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-1">{weeklyRevenue}</h3>
            <p className="text-muted-foreground">This Week's Revenue</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="card-hover">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="inline-flex rounded-full p-3 bg-spa-lavender/10 text-spa-lavender mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-2xl font-medium mb-1">{unreadMessagesCount}</h3>
            <p className="text-muted-foreground">Unread Messages</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
