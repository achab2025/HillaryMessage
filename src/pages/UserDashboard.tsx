
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Clock, Calendar, Settings, Menu, X, LogOut } from "lucide-react";

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
    <div className="min-h-screen bg-spa-cream">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-spa-blue">Serene Touch</h1>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - desktop always visible, mobile conditionally */}
        <aside className={`
          bg-white w-full md:w-64 md:min-h-screen shadow-md 
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
        `}>
          <div className="p-6">
            <Link to="/" className="text-2xl font-bold text-spa-blue hidden md:block">
              Serene Touch
            </Link>
            <div className="mt-8 space-y-2">
              <div className="border-b pb-4 mb-4">
                <h2 className="text-lg font-medium">Hello, {user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <Link to="/dashboard" className="flex items-center space-x-2 p-2 rounded-md bg-spa-blue/10 text-spa-blue">
                <User size={18} />
                <span>Dashboard</span>
              </Link>
              
              <Link to="/booking" className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
              
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <Settings size={18} />
                <span>Account Settings</span>
              </div>
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-100 text-red-600 w-full mt-8"
              >
                <LogOut size={18} />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex rounded-full p-3 bg-spa-blue/10 text-spa-blue mb-4">
                      <Calendar size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-1">{upcomingAppointments.length}</h3>
                    <p className="text-muted-foreground">Upcoming Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex rounded-full p-3 bg-spa-teal/10 text-spa-teal mb-4">
                      <Clock size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-1">{pastAppointments.length}</h3>
                    <p className="text-muted-foreground">Past Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex rounded-full p-3 bg-spa-green/10 text-spa-green mb-4">
                      <User size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-1">VIP Status</h3>
                    <p className="text-muted-foreground">Regular Member</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
                <TabsTrigger value="past">Past Appointments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                <div className="space-y-4">
                  {upcomingAppointments.length > 0 ? (
                    upcomingAppointments.map((appointment) => (
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
                            <div className="mt-4 md:mt-0 flex space-x-2">
                              <Button variant="outline">Reschedule</Button>
                              <Button variant="destructive">Cancel</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="mb-4">You don't have any upcoming appointments.</p>
                        <Button asChild>
                          <Link to="/booking">Book an Appointment</Link>
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
                            <div className="mt-4 md:mt-0 flex space-x-2">
                              <Button variant="outline">Book Again</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p>You don't have any past appointments.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
