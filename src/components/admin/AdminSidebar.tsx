
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
    <div className="h-full flex flex-col bg-card border-r border-border">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
            <LayoutDashboard className="h-4 w-4 text-background" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Hillary Massage</h1>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-background">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">Admin</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        <div className="mb-2 px-2">
          <p className="text-xs font-medium text-muted-foreground">
            Main
          </p>
        </div>
        {menuItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-foreground text-background' 
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              <span className="flex-1 text-left text-[13px]">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-2 px-2">
          <p className="text-xs font-medium text-muted-foreground">
            Business
          </p>
        </div>
        {menuItems.slice(4, 10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-foreground text-background' 
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              <span className="flex-1 text-left text-[13px]">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="my-2 px-2">
          <p className="text-xs font-medium text-muted-foreground">
            Advanced
          </p>
        </div>
        {menuItems.slice(10).map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-foreground text-background' 
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              <span className="flex-1 text-left text-[13px]">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Logout */}
      <div className="p-2 border-t border-border">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut size={16} strokeWidth={2} />
          <span className="text-[13px]">Sign Out</span>
        </button>
      </div>
    </div>
  );
};
