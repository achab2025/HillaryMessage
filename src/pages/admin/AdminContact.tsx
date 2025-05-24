
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/App";
import { AdminMobileHeader } from "@/components/admin/AdminMobileHeader";
import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import { ContactSubmissions } from "@/components/admin/ContactSubmissions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Clock, Archive } from "lucide-react";

const AdminContact = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactCount, setContactCount] = useState(0);
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    read: 0,
    archived: 0
  });

  // Redirect if not logged in or not admin
  useEffect(() => {
    if (!isLoggedIn || (user && !user.isAdmin)) {
      navigate("/login");
    }
  }, [isLoggedIn, user, navigate]);

  // Load contact submissions count and stats
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const unreadSubmissions = submissions.filter(sub => sub.status === "unread");
    const readSubmissions = submissions.filter(sub => sub.status === "read");
    const archivedSubmissions = submissions.filter(sub => sub.status === "archived");
    
    setContactCount(unreadSubmissions.length);
    setStats({
      total: submissions.length,
      unread: unreadSubmissions.length,
      read: readSubmissions.length,
      archived: archivedSubmissions.length
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isLoggedIn || !user || !user.isAdmin) {
    return null;
  }

  return (
    <>
      <AdminMobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <AdminDashboardLayout
        isMobileMenuOpen={isMobileMenuOpen}
        contactCount={contactCount}
        handleLogout={handleLogout}
      >
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
                Contact Messages
              </h1>
              <p className="text-muted-foreground">Manage customer inquiries and messages</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-sm text-blue-700">Total Messages</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <CardContent className="pt-6 text-center">
                  <MessageSquare className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-600">{stats.unread}</div>
                  <div className="text-sm text-amber-700">Unread</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{stats.read}</div>
                  <div className="text-sm text-green-700">Read</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                <CardContent className="pt-6 text-center">
                  <Archive className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
                  <div className="text-sm text-gray-700">Archived</div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Submissions */}
            <ContactSubmissions />
          </div>
        </main>
      </AdminDashboardLayout>
    </>
  );
};

export default AdminContact;
