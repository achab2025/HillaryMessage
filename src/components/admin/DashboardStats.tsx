
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
      title: "Total Appointments",
      value: appointmentsCount,
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Total Customers", 
      value: customersCount,
      icon: Users,
      color: "from-spa-green to-spa-green-dark",
      bgColor: "bg-spa-green/10",
      textColor: "text-spa-green"
    },
    {
      title: "This Week's Revenue",
      value: weeklyRevenue,
      icon: CircleDollarSign,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      title: "Unread Messages",
      value: unreadMessagesCount,
      icon: Mail,
      color: "from-purple-500 to-purple-600", 
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.title}
            className="group relative overflow-hidden bg-white/80 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spa-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="relative pt-6 pb-6">
              <div className="text-center">
                <div className={`inline-flex rounded-2xl p-4 ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={`${stat.textColor} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-spa-green group-hover:to-spa-green-dark transition-all duration-300">
                  {typeof stat.value === 'string' ? stat.value : stat.value}
                </h3>
                <p className="text-muted-foreground font-medium group-hover:text-spa-green transition-colors duration-300">
                  {stat.title}
                </p>
              </div>
            </CardContent>
            
            {/* Shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-pulse" />
          </Card>
        );
      })}
    </div>
  );
};
