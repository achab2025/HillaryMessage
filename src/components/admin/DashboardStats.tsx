
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
  const stats = [
    {
      title: "Appointments",
      value: appointmentsCount,
      icon: Calendar,
      change: "+12%"
    },
    {
      title: "Customers", 
      value: customersCount,
      icon: Users,
      change: "+8%"
    },
    {
      title: "Weekly Revenue",
      value: weeklyRevenue,
      icon: CircleDollarSign,
      change: "+23%"
    },
    {
      title: "Messages",
      value: unreadMessagesCount,
      icon: Mail,
      change: "+5%"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-semibold text-foreground mt-1">
                    {typeof stat.value === 'string' ? stat.value : stat.value}
                  </p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="bg-primary/10 p-2 rounded-md">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
