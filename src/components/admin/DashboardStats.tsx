
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, CircleDollarSign, Mail, TrendingUp, Clock, Star } from "lucide-react";

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
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-blue-600",
      trend: "+12%",
      trendIcon: TrendingUp
    },
    {
      title: "Total Customers", 
      value: customersCount,
      icon: Users,
      color: "from-spa-green to-spa-green-dark",
      bgColor: "bg-gradient-to-br from-spa-green/10 to-spa-green/20",
      textColor: "text-spa-green",
      trend: "+8%",
      trendIcon: TrendingUp
    },
    {
      title: "Weekly Revenue",
      value: weeklyRevenue,
      icon: CircleDollarSign,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      textColor: "text-emerald-600",
      trend: "+23%",
      trendIcon: TrendingUp
    },
    {
      title: "Unread Messages",
      value: unreadMessagesCount,
      icon: Mail,
      color: "from-purple-500 to-purple-600", 
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      textColor: "text-purple-600",
      trend: "3 new",
      trendIcon: Clock
    }
  ];

  const additionalStats = [
    {
      title: "Average Rating",
      value: "4.9",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
      textColor: "text-orange-600",
      trend: "Excellent",
      trendIcon: Star
    },
    {
      title: "Today's Bookings",
      value: "12",
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-indigo-600",
      trend: "+3 today",
      trendIcon: TrendingUp
    }
  ];

  const allStats = [...stats, ...additionalStats];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
      {allStats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trendIcon;
        return (
          <Card 
            key={stat.title}
            className="group relative overflow-hidden bg-white/90 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ background: `linear-gradient(45deg, transparent, ${stat.textColor.replace('text-', '')}20, transparent)` }} />
            
            <CardContent className="relative pt-6 pb-6">
              <div className="text-center">
                <div className={`inline-flex rounded-2xl p-4 ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={28} className={`${stat.textColor} group-hover:rotate-12 transition-transform duration-300`} />
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-spa-green group-hover:to-spa-green-dark transition-all duration-300">
                  {typeof stat.value === 'string' ? stat.value : stat.value}
                </h3>
                <p className="text-muted-foreground font-medium group-hover:text-spa-green transition-colors duration-300 mb-2">
                  {stat.title}
                </p>
                
                {/* Trend indicator */}
                <div className={`flex items-center justify-center space-x-1 ${stat.textColor} text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                  <TrendIcon size={12} />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </CardContent>
            
            {/* Shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1s_ease-out]" />
          </Card>
        );
      })}
    </div>
  );
};
