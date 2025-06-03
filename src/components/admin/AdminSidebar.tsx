
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { 
  BarChart3, Calendar, Users, Mail, CircleDollarSign, 
  Settings, LogOut, LayoutDashboard
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
    { icon: Mail, label: "Messages", id: "contact", active: activeTab === "contact", badge: contactCount },
    { icon: CircleDollarSign, label: "Finances", id: "finances", active: activeTab === "finances" },
    { icon: Settings, label: "Settings", id: "settings", active: activeTab === "settings" },
  ];

  const handleMenuClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/60">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-spa-green rounded-xl flex items-center justify-center group-hover:bg-spa-green-dark transition-colors">
            <LayoutDashboard className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 group-hover:text-spa-green transition-colors">
              Hillary Massage
            </h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-gray-200/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Administrator</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                item.active 
                  ? 'bg-spa-green text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Logout */}
      <div className="p-4 border-t border-gray-200/60">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};
