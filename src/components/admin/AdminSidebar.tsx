
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { 
  BarChart3, Calendar, Users, Mail, CircleDollarSign, 
  Settings, LogOut 
} from "lucide-react";

interface AdminSidebarProps {
  contactCount: number;
  handleLogout: () => void;
}

export const AdminSidebar = ({ contactCount, handleLogout }: AdminSidebarProps) => {
  const { user } = useContext(AuthContext);

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointments", active: false },
    { icon: Users, label: "Customers", active: false },
    { icon: Mail, label: "Contact Messages", active: false, badge: contactCount },
    { icon: CircleDollarSign, label: "Finances", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="p-6 h-full">
      <Link to="/" className="group block mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent group-hover:from-spa-green-dark group-hover:to-spa-green transition-all duration-300">
          Hillary Massage
        </h1>
      </Link>
      
      <div className="space-y-2">
        <div className="border-b border-spa-green/10 pb-6 mb-6">
          <div className="bg-gradient-to-r from-spa-green/10 to-spa-green-dark/10 rounded-xl p-4 border border-spa-green/20">
            <h2 className="text-lg font-semibold text-spa-green mb-1">Admin Panel</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>

        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.label}
              className={`group relative flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                item.active 
                  ? 'bg-gradient-to-r from-spa-green to-spa-green-dark text-white shadow-lg' 
                  : 'hover:bg-gradient-to-r hover:from-spa-green/10 hover:to-spa-green-dark/10 hover:shadow-md hover:-translate-y-0.5'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1 rounded-lg transition-all duration-300 ${
                  item.active ? 'bg-white/20' : 'group-hover:bg-spa-green/20'
                }`}>
                  <Icon size={18} className={`transition-all duration-300 ${
                    item.active ? 'text-white' : 'text-spa-green group-hover:scale-110'
                  }`} />
                </div>
                <span className={`font-medium transition-all duration-300 ${
                  item.active ? 'text-white' : 'text-gray-700 group-hover:text-spa-green'
                }`}>
                  {item.label}
                </span>
              </div>
              
              {item.badge && item.badge > 0 && (
                <div className="relative">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {item.badge}
                  </span>
                  <span className="absolute top-0 right-0 w-6 h-6 bg-red-400 rounded-full animate-ping opacity-75"></span>
                </div>
              )}
              
              {/* Hover effect */}
              {!item.active && (
                <div className="absolute inset-0 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          );
        })}
        
        <button 
          onClick={handleLogout}
          className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 text-red-600 w-full mt-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="p-1 rounded-lg group-hover:bg-red-100 transition-all duration-300">
            <LogOut size={18} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};
