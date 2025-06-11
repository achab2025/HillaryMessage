
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, Clock, Calendar, Settings, Menu, X, LogOut, Plus, Star, ArrowRight, 
  Bell, Heart, Gift, CreditCard, MapPin, Phone, Mail, Award, TrendingUp,
  History, Bookmark, MessageCircle, Shield, HelpCircle, Download
} from "lucide-react";

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    service: "Deep Tissue Massage",
    date: "2025-04-20",
    time: "14:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "upcoming",
    price: 120
  },
  {
    id: "2",
    service: "Swedish Massage",
    date: "2025-05-02",
    time: "10:30",
    duration: 90,
    therapist: "Michael Johnson",
    status: "upcoming",
    price: 150
  },
  {
    id: "3",
    service: "Hot Stone Therapy",
    date: "2025-03-15",
    time: "16:00",
    duration: 60,
    therapist: "Sarah Williams",
    status: "completed",
    price: 140
  }
];

// Mock data for wellness tracking
const wellnessData = {
  stressLevel: 65,
  relaxationHours: 12,
  monthlyGoal: 20,
  totalSessions: 24,
  favoriteService: "Swedish Massage",
  wellnessScore: 8.2
};

// Mock notifications
const notifications = [
  { id: 1, message: "Upcoming appointment tomorrow at 2:00 PM", type: "reminder", time: "2 hours ago" },
  { id: 2, message: "New seasonal treatment available: Aromatherapy Bliss", type: "offer", time: "1 day ago" },
  { id: 3, message: "Your wellness goal is 80% complete this month", type: "achievement", time: "3 days ago" }
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Load appointments
  useEffect(() => {
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
    return null;
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
        {/* Enhanced Sidebar */}
        <aside className={`
          bg-white/95 backdrop-blur-sm w-full md:w-80 md:min-h-screen shadow-xl border-r border-spa-beige/30
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto overflow-y-auto
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
            {/* User Profile Card */}
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
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs bg-spa-green/20 text-spa-green">
                      Premium Member
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "overview" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <User size={20} />
                <span className="font-medium">Dashboard Overview</span>
              </button>
              
              <button 
                onClick={() => setActiveTab("appointments")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "appointments" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <Calendar size={20} />
                <span className="font-medium">My Appointments</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                onClick={() => setActiveTab("wellness")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "wellness" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <Heart size={20} />
                <span className="font-medium">Wellness Tracking</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                onClick={() => setActiveTab("membership")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "membership" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <Award size={20} />
                <span className="font-medium">Membership</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                onClick={() => setActiveTab("notifications")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "notifications" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <Bell size={20} />
                <span className="font-medium">Notifications</span>
                {notifications.length > 0 && (
                  <Badge className="bg-red-500 text-white text-xs ml-auto">
                    {notifications.length}
                  </Badge>
                )}
              </button>
              
              <Link 
                to="/booking" 
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue transition-all duration-200 group"
              >
                <Plus size={20} />
                <span className="font-medium">Book Appointment</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <button 
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "profile" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <Settings size={20} />
                <span className="font-medium">Profile & Settings</span>
                <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                onClick={() => setActiveTab("support")}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === "support" 
                    ? "bg-gradient-to-r from-spa-blue to-spa-teal text-white shadow-md" 
                    : "hover:bg-spa-beige/50 text-gray-700 hover:text-spa-blue"
                }`}
              >
                <HelpCircle size={20} />
                <span className="font-medium">Help & Support</span>
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

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            {activeTab === "overview" && (
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
            )}

            {/* Appointments Tab */}
            {activeTab === "appointments" && (
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
            )}

            {/* Wellness Tracking Tab */}
            {activeTab === "wellness" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Wellness Tracking</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        Stress Level
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-2">{wellnessData.stressLevel}%</div>
                          <Progress value={wellnessData.stressLevel} className="h-3" />
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          Based on your recent activities and feedback
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-spa-green" />
                        Wellness Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-2">{wellnessData.wellnessScore}/10</div>
                          <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          Excellent progress this month!
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Favorite Service</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-spa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="h-8 w-8 text-spa-blue" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{wellnessData.favoriteService}</h3>
                        <p className="text-sm text-muted-foreground">Your most booked service</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Monthly Goal Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Relaxation Hours</span>
                          <span className="text-2xl font-bold text-spa-blue">{wellnessData.relaxationHours}/{wellnessData.monthlyGoal}</span>
                        </div>
                        <Progress value={(wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100} className="h-3" />
                        <p className="text-sm text-muted-foreground">
                          {wellnessData.monthlyGoal - wellnessData.relaxationHours} hours to reach your goal
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Membership Tab */}
            {activeTab === "membership" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Membership & Rewards</h2>
                
                <Card className="border-0 shadow-lg bg-gradient-to-r from-spa-blue/5 to-spa-teal/10">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Membership</h3>
                        <p className="text-muted-foreground mb-4">Active since March 2024</p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-spa-green text-white">20% Off All Services</Badge>
                          <Badge className="bg-spa-blue text-white">Priority Booking</Badge>
                          <Badge className="bg-spa-teal text-white">Exclusive Access</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-20 h-20 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                          <Award className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="h-5 w-5 text-spa-green" />
                        Rewards Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-spa-green mb-2">2,450</div>
                        <p className="text-sm text-muted-foreground">Available Points</p>
                        <Button variant="outline" className="mt-4 w-full">
                          Redeem Points
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-spa-blue" />
                        Saved Payment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                            VISA
                          </div>
                          <span className="text-sm">•••• 4242</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Manage Payment Methods
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bookmark className="h-5 w-5 text-spa-teal" />
                        Referrals
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-spa-teal mb-2">3</div>
                        <p className="text-sm text-muted-foreground mb-4">Friends Referred</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Invite Friends
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
                  <Button variant="outline" size="sm">Mark All Read</Button>
                </div>
                
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <Card key={notification.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            notification.type === 'reminder' ? 'bg-spa-blue/20 text-spa-blue' :
                            notification.type === 'offer' ? 'bg-spa-green/20 text-spa-green' :
                            'bg-spa-teal/20 text-spa-teal'
                          }`}>
                            {notification.type === 'reminder' && <Clock size={16} />}
                            {notification.type === 'offer' && <Gift size={16} />}
                            {notification.type === 'achievement' && <Award size={16} />}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{notification.message}</p>
                            <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Profile & Settings</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">
                            {user.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{user.name}</h3>
                          <p className="text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone size={16} className="text-muted-foreground" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin size={16} className="text-muted-foreground" />
                          <span>123 Wellness St, Spa City, SC 12345</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail size={16} className="text-muted-foreground" />
                          <span>{user.email}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Edit Profile</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Email Notifications</span>
                          <div className="w-10 h-6 bg-spa-blue rounded-full relative">
                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">SMS Reminders</span>
                          <div className="w-10 h-6 bg-spa-blue rounded-full relative">
                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Marketing Communications</span>
                          <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                            <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Shield size={16} className="mr-2" />
                        Privacy Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === "support" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Help & Support</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="h-12 w-12 text-spa-blue mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                      <p className="text-muted-foreground text-sm mb-4">Get instant help from our support team</p>
                      <Button className="w-full">Start Chat</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Phone className="h-12 w-12 text-spa-green mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Call Support</h3>
                      <p className="text-muted-foreground text-sm mb-4">Speak directly with our team</p>
                      <Button variant="outline" className="w-full">Call Now</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Mail className="h-12 w-12 text-spa-teal mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-muted-foreground text-sm mb-4">Send us your questions via email</p>
                      <Button variant="outline" className="w-full">Send Email</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <HelpCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                      <p className="text-muted-foreground text-sm mb-4">Find answers to common questions</p>
                      <Button variant="outline" className="w-full">View FAQ</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="ghost" className="justify-start h-auto p-4">
                        <div className="text-left">
                          <div className="font-medium">Booking Guidelines</div>
                          <div className="text-sm text-muted-foreground">Learn about our booking policies</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start h-auto p-4">
                        <div className="text-left">
                          <div className="font-medium">Cancellation Policy</div>
                          <div className="text-sm text-muted-foreground">Understand our cancellation terms</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start h-auto p-4">
                        <div className="text-left">
                          <div className="font-medium">Service Information</div>
                          <div className="text-sm text-muted-foreground">Details about our treatments</div>
                        </div>
                      </Button>
                      <Button variant="ghost" className="justify-start h-auto p-4">
                        <div className="text-left">
                          <div className="font-medium">Account Management</div>
                          <div className="text-sm text-muted-foreground">Manage your account settings</div>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
