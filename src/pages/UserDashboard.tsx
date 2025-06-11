
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/App";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewTab } from "@/components/dashboard/OverviewTab";
import { AppointmentsTab } from "@/components/dashboard/AppointmentsTab";
import { WellnessTab } from "@/components/dashboard/WellnessTab";
import { MembershipTab } from "@/components/dashboard/MembershipTab";
import { NotificationsTab } from "@/components/dashboard/NotificationsTab";
import { ProfileTab } from "@/components/dashboard/ProfileTab";
import { SupportTab } from "@/components/dashboard/SupportTab";

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

  if (!isLoggedIn || !user) {
    return null;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab upcomingAppointments={upcomingAppointments} wellnessData={wellnessData} />;
      case "appointments":
        return <AppointmentsTab upcomingAppointments={upcomingAppointments} pastAppointments={pastAppointments} />;
      case "wellness":
        return <WellnessTab wellnessData={wellnessData} />;
      case "membership":
        return <MembershipTab />;
      case "notifications":
        return <NotificationsTab notifications={notifications} />;
      case "profile":
        return <ProfileTab />;
      case "support":
        return <SupportTab />;
      default:
        return <OverviewTab upcomingAppointments={upcomingAppointments} wellnessData={wellnessData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-white to-spa-beige/30">
      <div className="flex flex-col md:flex-row min-h-screen">
        <DashboardSidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          notifications={notifications}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
