
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your wellness overview.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
            <p className="text-xs text-muted-foreground">scheduled sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wellnessData.totalSessions}</div>
            <p className="text-xs text-muted-foreground">all-time bookings</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wellnessData.wellnessScore}/10</div>
            <p className="text-xs text-muted-foreground">current rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wellnessData.relaxationHours}h</div>
            <p className="text-xs text-muted-foreground">relaxation time</p>
          </CardContent>
        </Card>
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Next Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="font-medium">{upcomingAppointments[0].service}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatDate(upcomingAppointments[0].date)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {upcomingAppointments[0].time} • {upcomingAppointments[0].therapist}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Reschedule</Button>
                  <Button variant="outline" size="sm" className="flex-1">Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground mb-3">No upcoming appointments</p>
                <Button size="sm" asChild>
                  <Link to="/booking">Book Now</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Relaxation Hours</span>
                  <span className="text-sm text-muted-foreground">
                    {wellnessData.relaxationHours}/{wellnessData.monthlyGoal}h
                  </span>
                </div>
                <Progress 
                  value={(wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100} 
                  className="h-2"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {Math.round((wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100)}% complete
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
