
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/App";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import our new components
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { AppointmentsTab } from "@/components/admin/AppointmentsTab";
import { CustomersTab } from "@/components/admin/CustomersTab";
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
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-spa-beige to-spa-cream">
      {/* Mobile Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-spa-green/10 p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hover:bg-spa-green/10 transition-all duration-300"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - desktop always visible, mobile conditionally */}
        <aside className={`
          bg-white/90 backdrop-blur-md w-full md:w-64 md:min-h-screen shadow-xl border-r border-spa-green/10
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
        `}>
          <AdminSidebar contactCount={contactCount} handleLogout={handleLogout} />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <DashboardStats 
              appointmentsCount={appointments.length}
              customersCount={customers.length}
              weeklyRevenue="$2,450"
              unreadMessagesCount={contactCount}
            />
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-spa-green/10 overflow-hidden">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="mb-6 bg-spa-green/5 border-b border-spa-green/10 rounded-none w-full justify-start p-1">
                  <TabsTrigger 
                    value="appointments" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
                  >
                    Appointments
                  </TabsTrigger>
                  <TabsTrigger 
                    value="customers"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
                  >
                    Customers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="contact"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
                  >
                    Contact Messages
                  </TabsTrigger>
                </TabsList>
                
                <div className="p-6">
                  <TabsContent value="appointments">
                    <AppointmentsTab 
                      appointments={filteredAppointments} 
                      formatDate={formatDate} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="customers">
                    <CustomersTab customers={filteredCustomers} />
                  </TabsContent>
                  
                  <TabsContent value="contact">
                    <ContactSubmissions />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
