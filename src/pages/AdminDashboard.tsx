import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, Clock, Calendar, Settings, Menu, X, LogOut, 
  Search, BarChart3, CircleDollarSign, PlusCircle, Mail 
} from "lucide-react";
import { ContactSubmissions } from "@/components/admin/ContactSubmissions";

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    client: "John Doe",
    service: "Deep Tissue Massage",
    date: "2025-04-20",
    time: "14:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "confirmed"
  },
  {
    id: "2",
    client: "Alice Johnson",
    service: "Swedish Massage",
    date: "2025-04-20",
    time: "10:30",
    duration: 90,
    therapist: "Michael Johnson",
    status: "confirmed"
  },
  {
    id: "3",
    client: "Robert Brown",
    service: "Hot Stone Therapy",
    date: "2025-04-21",
    time: "16:00",
    duration: 60,
    therapist: "Sarah Williams",
    status: "pending"
  },
  {
    id: "4",
    client: "Emma Wilson",
    service: "Aromatherapy Massage",
    date: "2025-04-21",
    time: "13:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "confirmed"
  }
];

// Mock data for customers
const mockCustomers = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "555-1234", appointments: 8 },
  { id: "2", name: "Alice Johnson", email: "alice@example.com", phone: "555-5678", appointments: 4 },
  { id: "3", name: "Robert Brown", email: "robert@example.com", phone: "555-9012", appointments: 2 },
  { id: "4", name: "Emma Wilson", email: "emma@example.com", phone: "555-3456", appointments: 6 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contactCount, setContactCount] = useState(0);

  // Redirect if not logged in or not admin
  useEffect(() => {
    if (!isLoggedIn || (user && !user.isAdmin)) {
      navigate("/login");
    }
  }, [isLoggedIn, user, navigate]);

  // Load appointments and customers
  useEffect(() => {
    // In a real app, you would fetch from an API
    setAppointments(mockAppointments);
    setCustomers(mockCustomers);
  }, []);

  // Load contact submissions count
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const unreadSubmissions = submissions.filter(sub => sub.status === "unread");
    setContactCount(unreadSubmissions.length);
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

  const filteredAppointments = appointments.filter(appointment => 
    appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn || !user || !user.isAdmin) {
    return null; // Redirecting via useEffect
  }

  return (
    <div className="min-h-screen bg-spa-cream">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-spa-blue">Admin Dashboard</h1>
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
                <h2 className="text-lg font-medium">Admin Panel</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <Link to="/admin" className="flex items-center space-x-2 p-2 rounded-md bg-spa-blue/10 text-spa-blue">
                <BarChart3 size={18} />
                <span>Dashboard</span>
              </Link>
              
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <Calendar size={18} />
                <span>Appointments</span>
              </div>
              
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <Users size={18} />
                <span>Customers</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>Contact Messages</span>
                </div>
                {contactCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {contactCount}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <CircleDollarSign size={18} />
                <span>Finances</span>
              </div>
              
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
                <Settings size={18} />
                <span>Settings</span>
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
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search appointments or customers..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex rounded-full p-3 bg-spa-blue/10 text-spa-blue mb-4">
                      <Calendar size={24} />
                    </div>
                    <h3 className="text-2xl font-medium mb-1">{appointments.length}</h3>
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
                    <h3 className="text-2xl font-medium mb-1">{customers.length}</h3>
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
                    <h3 className="text-2xl font-medium mb-1">$2,450</h3>
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
                    <h3 className="text-2xl font-medium mb-1">{contactCount}</h3>
                    <p className="text-muted-foreground">Unread Messages</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="contact">Contact Messages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointments">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-medium">Upcoming Appointments</h3>
                    <Button size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add New
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Client</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Service</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date & Time</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Therapist</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {filteredAppointments.length > 0 ? (
                          filteredAppointments.map((appointment) => (
                            <tr key={appointment.id} className="hover:bg-muted/20">
                              <td className="px-4 py-3 text-sm">{appointment.client}</td>
                              <td className="px-4 py-3 text-sm">{appointment.service}</td>
                              <td className="px-4 py-3 text-sm">
                                {formatDate(appointment.date)}<br />
                                {appointment.time} ({appointment.duration}min)
                              </td>
                              <td className="px-4 py-3 text-sm">{appointment.therapist}</td>
                              <td className="px-4 py-3 text-sm">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                  ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                                    appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                                    'bg-red-100 text-red-800'}`}>
                                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">Edit</Button>
                                  <Button variant="ghost" size="sm" className="text-red-500">Cancel</Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="px-4 py-6 text-center text-muted-foreground">
                              No appointments found matching your search.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="customers">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-medium">Customer List</h3>
                    <Button size="sm">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Customer
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Email</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Phone</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Appointments</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {filteredCustomers.length > 0 ? (
                          filteredCustomers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-muted/20">
                              <td className="px-4 py-3 text-sm font-medium">{customer.name}</td>
                              <td className="px-4 py-3 text-sm">{customer.email}</td>
                              <td className="px-4 py-3 text-sm">{customer.phone}</td>
                              <td className="px-4 py-3 text-sm">{customer.appointments}</td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">View</Button>
                                  <Button variant="ghost" size="sm">Edit</Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                              No customers found matching your search.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact">
                <ContactSubmissions />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
