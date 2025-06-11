import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Clock, Calendar, Settings, Menu, X, LogOut, Plus, Star, ArrowRight } from "lucide-react";

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    service: "Deep Tissue Massage",
    date: "2025-04-20",
    time: "14:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "upcoming"
  },
  {
    id: "2",
    service: "Swedish Massage",
    date: "2025-05-02",
    time: "10:30",
    duration: 90,
    therapist: "Michael Johnson",
    status: "upcoming"
  },
  {
    id: "3",
    service: "Hot Stone Therapy",
    date: "2025-03-15",
    time: "16:00",
    duration: 60,
    therapist: "Sarah Williams",
    status: "completed"
  }
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Load appointments
  useEffect(() => {
    // In a real app, you would fetch from an API
    setUpcomingAppointments(
      mockAppointments.filter(apt => apt.status === "upcoming")
    );
    setPastAppointments(
      mockAppointments.filter(apt => apt.status === "completed")
    );
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isLoggedIn || !user) {
    return null; // Redirecting via useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-white to-spa-beige/30">
      {/* Mobile Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-spa-beige/30 p-4 flex justify-between items-center md:hidden sticky top-0 z-40">
        <h1 className="text-xl font-bold text-spa-blue">Serene Touch</h1>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hover:bg-spa-beige/50"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - Enhanced Design */}
        <aside className={`
          bg-white/95 backdrop-blur-sm w-full md:w-72 md:min-h-screen shadow-xl border-r border-spa-beige/30
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
        `}>
          <div className="p-6 border-b border-spa-beige/30">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-spa-blue to-spa-teal rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-spa-blue group-hover:text-spa-teal transition-colors">
                  Serene Touch
                </h2>
                <p className="text-sm text-muted-foreground">Wellness Portal</p>
              </div>
            </Link>
          </div>

          <div className="p-6">
            <div className="bg-gradient-to-r from-spa-green/10 to-spa-teal/10 rounded-2xl p-4 border border-spa-green/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-spa-green to-spa-teal rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-white">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">Welcome back,</h3>
                  <p className="text-spa-blue font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
              </div>
            </div>

            <nav className="space-y-2">
              <Link 
                to="/dashboard" 
                className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <User size={20} />
                <span className="font-medium">Dashboard</span>
              </Link>
              
              <Link 
                to="/booking" 
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue transition-all duration-200 group"
              >
                <Calendar size={20} />
                <span className="font-medium">Book Appointment</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue transition-all duration-200 group">
                <Settings size={20} />
                <span className="font-medium">Account Settings</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-spa-beige/30">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 text-red-600 hover:text-red-700 transition-all duration-200 group"
              >
                <LogOut size={20} />
                <span className="font-medium">Log Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content - Enhanced Design */}
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Wellness Journey</h1>
              <p className="text-lg text-muted-foreground">Manage your appointments and track your wellness progress</p>
            </div>
            
            {/* Stats Cards - Enhanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{pastAppointments.length}</h3>
                    <p className="text-muted-foreground font-medium">Completed Sessions</p>
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
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">Premium</h3>
                    <p className="text-muted-foreground font-medium">Membership Status</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Appointments Section - Enhanced Design */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="border-b border-spa-beige/30 bg-gradient-to-r from-white to-spa-cream/30">
                <CardTitle className="text-2xl text-gray-900">Your Appointments</CardTitle>
                <CardDescription className="text-lg">View and manage your wellness sessions</CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-spa-beige/20 p-1 rounded-xl">
                    <TabsTrigger 
                      value="upcoming" 
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-blue font-medium"
                    >
                      Upcoming Sessions
                    </TabsTrigger>
                    <TabsTrigger 
                      value="past"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-blue font-medium"
                    >
                      Past Sessions
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming">
                    <div className="space-y-4">
                      {upcomingAppointments.length > 0 ? (
                        upcomingAppointments.map((appointment) => (
                          <Card key={appointment.id} className="border border-spa-beige/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{appointment.service}</h3>
                                  <div className="space-y-1 text-muted-foreground">
                                    <p className="flex items-center gap-2">
                                      <Calendar size={16} />
                                      {formatDate(appointment.date)} at {appointment.time}
                                    </p>
                                    <p className="flex items-center gap-2">
                                      <Clock size={16} />
                                      Duration: {appointment.duration} minutes
                                    </p>
                                    <p className="flex items-center gap-2">
                                      <User size={16} />
                                      Therapist: {appointment.therapist}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <Button variant="outline" className="border-spa-blue text-spa-blue hover:bg-spa-blue hover:text-white">
                                    Reschedule
                                  </Button>
                                  <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <Card className="border-2 border-dashed border-spa-beige/60">
                          <CardContent className="p-12 text-center">
                            <div className="w-16 h-16 bg-spa-beige/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Calendar size={32} className="text-spa-blue" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No upcoming appointments</h3>
                            <p className="text-muted-foreground mb-6">Ready to book your next wellness session?</p>
                            <Button asChild className="bg-gradient-to-r from-spa-blue to-spa-teal hover:from-spa-blue-dark hover:to-spa-teal-dark">
                              <Link to="/booking">
                                <Plus size={16} className="mr-2" />
                                Book an Appointment
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="past">
                    <div className="space-y-4">
                      {pastAppointments.length > 0 ? (
                        pastAppointments.map((appointment) => (
                          <Card key={appointment.id} className="border border-spa-beige/40 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{appointment.service}</h3>
                                  <div className="space-y-1 text-muted-foreground">
                                    <p className="flex items-center gap-2">
                                      <Calendar size={16} />
                                      {formatDate(appointment.date)} at {appointment.time}
                                    </p>
                                    <p className="flex items-center gap-2">
                                      <Clock size={16} />
                                      Duration: {appointment.duration} minutes
                                    </p>
                                    <p className="flex items-center gap-2">
                                      <User size={16} />
                                      Therapist: {appointment.therapist}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <Button variant="outline" className="border-spa-green text-spa-green hover:bg-spa-green hover:text-white">
                                    Book Again
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <Card className="border-2 border-dashed border-spa-beige/60">
                          <CardContent className="p-12 text-center">
                            <div className="w-16 h-16 bg-spa-beige/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Clock size={32} className="text-spa-teal" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No past appointments</h3>
                            <p className="text-muted-foreground">Your appointment history will appear here.</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
