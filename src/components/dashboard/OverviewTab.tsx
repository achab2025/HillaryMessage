
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  User, Clock, Calendar, Star, Heart, TrendingUp
} from "lucide-react";

interface OverviewTabProps {
  upcomingAppointments: any[];
  wellnessData: any;
}

export const OverviewTab = ({ upcomingAppointments, wellnessData }: OverviewTabProps) => {
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
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Wellness Journey</h1>
        <p className="text-lg text-muted-foreground">Manage your appointments and track your wellness progress</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-blue/5 to-spa-teal/10"></div>
          <CardContent className="relative pt-6">
            <div className="text-center">
              <div className="inline-flex rounded-2xl p-4 bg-gradient-to-br from-spa-blue to-spa-teal text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Calendar size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{upcomingAppointments.length}</h3>
              <p className="text-muted-foreground font-medium">Upcoming Sessions</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-teal/5 to-spa-green/10"></div>
          <CardContent className="relative pt-6">
            <div className="text-center">
              <div className="inline-flex rounded-2xl p-4 bg-gradient-to-br from-spa-teal to-spa-green text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Clock size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{wellnessData.totalSessions}</h3>
              <p className="text-muted-foreground font-medium">Total Sessions</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-green/5 to-spa-blue/10"></div>
          <CardContent className="relative pt-6">
            <div className="text-center">
              <div className="inline-flex rounded-2xl p-4 bg-gradient-to-br from-spa-green to-spa-blue text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Star size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{wellnessData.wellnessScore}</h3>
              <p className="text-muted-foreground font-medium">Wellness Score</p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10"></div>
          <CardContent className="relative pt-6">
            <div className="text-center">
              <div className="inline-flex rounded-2xl p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{wellnessData.relaxationHours}</h3>
              <p className="text-muted-foreground font-medium">Relaxation Hours</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-spa-blue" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                <div className="bg-spa-beige/20 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">{upcomingAppointments[0].service}</h4>
                  <p className="text-muted-foreground">{formatDate(upcomingAppointments[0].date)} at {upcomingAppointments[0].time}</p>
                  <p className="text-sm text-spa-blue">with {upcomingAppointments[0].therapist}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button variant="outline" size="sm">Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">No upcoming appointments</p>
                <Button asChild>
                  <Link to="/booking">Book Now</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Wellness Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Monthly Relaxation Goal</span>
                  <span className="text-sm text-muted-foreground">{wellnessData.relaxationHours}/{wellnessData.monthlyGoal} hours</span>
                </div>
                <Progress value={(wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                You're {Math.round((wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100)}% towards your monthly goal!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
