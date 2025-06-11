
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, Calendar, Menu, X, LogOut, Plus, Heart, Award, 
  Bell, Settings, HelpCircle, ArrowRight
} from "lucide-react";

interface DashboardSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: any[];
  onLogout: () => void;
}

export const DashboardSidebar = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  activeTab, 
  setActiveTab, 
  notifications, 
  onLogout 
}: DashboardSidebarProps) => {
  const { user } = useContext(AuthContext);

  return (
    <>
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

      {/* Sidebar */}
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
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">Welcome back,</h3>
                <p className="text-spa-blue font-medium truncate">{user?.name}</p>
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
              onClick={onLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 text-red-600 hover:text-red-700 transition-all duration-200 group"
            >
              <LogOut size={20} />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
