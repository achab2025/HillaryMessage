
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
    <div className="h-full flex flex-col bg-card">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors">
            <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Hillary Massage</h1>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-primary-foreground">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">Administrator</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="mb-2">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-1">
            Main
          </p>
        </div>
        {menuItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-2">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-1">
            Business
          </p>
        </div>
        {menuItems.slice(4, 10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-2">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-1">
            Advanced
          </p>
        </div>
        {menuItems.slice(10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Logout */}
      <div className="p-3 border-t border-border">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-2 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
