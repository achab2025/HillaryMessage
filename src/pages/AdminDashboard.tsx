
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/App";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardContent } from "@/components/admin/DashboardContent";
import { useAdminData } from "@/hooks/useAdminData";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const {
    appointments,
    customers,
    searchTerm,
    setSearchTerm,
    contactCount,
    formatDate,
    filteredAppointments,
    filteredCustomers
  } = useAdminData();

  // Redirect if not logged in or not admin
  useEffect(() => {
    if (!isLoggedIn || (user && !user.isAdmin)) {
      navigate("/login");
    }
  }, [isLoggedIn, user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isLoggedIn || !user || !user.isAdmin) {
    return null; // Redirecting via useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <AdminLayout
        contactCount={contactCount}
        handleLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <DashboardContent
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          appointments={appointments}
          customers={customers}
          contactCount={contactCount}
          filteredAppointments={filteredAppointments}
          filteredCustomers={filteredCustomers}
          formatDate={formatDate}
        />
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
