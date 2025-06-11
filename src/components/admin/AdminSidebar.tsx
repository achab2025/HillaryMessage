
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { 
  BarChart3, Calendar, Users, Mail, CircleDollarSign, 
  Settings, LogOut, LayoutDashboard, Star, Gift,
  Bell, TrendingUp, FileText, UserCheck, Shield,
  Clock, Target, Award
} from "lucide-react";

interface AdminSidebarProps {
  contactCount: number;
  handleLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminSidebar = ({ contactCount, handleLogout, activeTab, setActiveTab }: AdminSidebarProps) => {
  const { user } = useContext(AuthContext);

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", id: "dashboard", active: activeTab === "dashboard" },
    { icon: Calendar, label: "Appointments", id: "appointments", active: activeTab === "appointments" },
    { icon: Users, label: "Customers", id: "customers", active: activeTab === "customers" },
    { icon: UserCheck, label: "Staff Management", id: "staff", active: activeTab === "staff" },
    { icon: CircleDollarSign, label: "Finances", id: "finances", active: activeTab === "finances" },
    { icon: TrendingUp, label: "Analytics", id: "analytics", active: activeTab === "analytics" },
    { icon: Star, label: "Reviews", id: "reviews", active: activeTab === "reviews" },
    { icon: Gift, label: "Promotions", id: "promotions", active: activeTab === "promotions" },
    { icon: Bell, label: "Notifications", id: "notifications", active: activeTab === "notifications" },
    { icon: Mail, label: "Messages", id: "contact", active: activeTab === "contact", badge: contactCount },
    { icon: FileText, label: "Reports", id: "reports", active: activeTab === "reports" },
    { icon: Clock, label: "Schedule", id: "schedule", active: activeTab === "schedule" },
    { icon: Target, label: "Goals", id: "goals", active: activeTab === "goals" },
    { icon: Award, label: "Achievements", id: "achievements", active: activeTab === "achievements" },
    { icon: Shield, label: "Security", id: "security", active: activeTab === "security" },
    { icon: Settings, label: "Settings", id: "settings", active: activeTab === "settings" },
  ];

  const handleMenuClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-white to-gray-50/80 border-r border-gray-200/60 shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/60 bg-gradient-to-r from-spa-green to-spa-teal">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-lg">
            <LayoutDashboard className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
              Hillary Massage
            </h1>
            <p className="text-sm text-white/80">Admin Control Center</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center shadow-md">
            <span className="text-sm font-bold text-white">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Administrator</p>
            <p className="text-xs text-gray-600 truncate">{user?.email}</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-green-600 font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            Main Menu
          </p>
        </div>
        {menuItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                item.active 
                  ? 'bg-gradient-to-r from-spa-green to-spa-teal text-white shadow-lg shadow-spa-green/20 scale-[1.02]' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
              }`}
            >
              <Icon size={20} className={item.active ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            Business Tools
          </p>
        </div>
        {menuItems.slice(4, 10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                item.active 
                  ? 'bg-gradient-to-r from-spa-green to-spa-teal text-white shadow-lg shadow-spa-green/20 scale-[1.02]' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
              }`}
            >
              <Icon size={20} className={item.active ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            Advanced
          </p>
        </div>
        {menuItems.slice(10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                item.active 
                  ? 'bg-gradient-to-r from-spa-green to-spa-teal text-white shadow-lg shadow-spa-green/20 scale-[1.02]' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
              }`}
            >
              <Icon size={20} className={item.active ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Logout */}
      <div className="p-4 border-t border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 hover:shadow-md"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
