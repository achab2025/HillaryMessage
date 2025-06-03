
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+12%"
    },
    {
      title: "Customers", 
      value: customersCount,
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      change: "+8%"
    },
    {
      title: "Weekly Revenue",
      value: weeklyRevenue,
      icon: CircleDollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+23%"
    },
    {
      title: "Messages",
      value: unreadMessagesCount,
      icon: Mail,
      color: "text-orange-600", 
      bgColor: "bg-orange-50",
      change: "+5%"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {typeof stat.value === 'string' ? stat.value : stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last week</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
