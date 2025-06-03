
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/App";
import { 
  BarChart3, Calendar, Users, Mail, CircleDollarSign, 
  Settings, LogOut, Sparkles
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
    { icon: Mail, label: "Contact Messages", id: "contact", active: activeTab === "contact", badge: contactCount },
    { icon: CircleDollarSign, label: "Finances", id: "finances", active: activeTab === "finances" },
    { icon: Settings, label: "Settings", id: "settings", active: activeTab === "settings" },
  ];

  const handleMenuClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="p-8 h-full relative">
      <Link to="/" className="group block mb-10">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-spa-green/10 to-spa-green-dark/10 border border-spa-green/20 transition-all duration-300 hover:shadow-xl hover:scale-105">
          <div className="p-2 bg-gradient-to-br from-spa-green to-spa-green-dark rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent group-hover:from-spa-green-dark group-hover:to-spa-green transition-all duration-300">
              Hillary Massage
            </h1>
            <p className="text-sm text-spa-gray font-medium">Spa Management</p>
          </div>
        </div>
      </Link>
      
      <div className="space-y-3">
        <div className="border-b border-spa-green/20 pb-8 mb-8">
          <div className="bg-gradient-to-br from-spa-green/10 via-white to-spa-green-dark/10 rounded-2xl p-6 border border-spa-green/20 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-spa-green to-spa-green-dark rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{user?.email?.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-spa-green-dark">Admin Panel</h2>
                <p className="text-sm text-spa-gray font-medium">{user?.email}</p>
              </div>
            </div>
            <div className="w-full bg-spa-green/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-spa-green to-spa-green-dark h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-spa-gray mt-2 font-medium">Dashboard Active</p>
          </div>
        </div>

        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.label}
              className={`group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                item.active 
                  ? 'bg-gradient-to-r from-spa-green to-spa-green-dark text-white shadow-2xl scale-105' 
                  : 'hover:bg-gradient-to-r hover:from-spa-green/10 hover:to-spa-green-dark/10 hover:shadow-xl hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleMenuClick(item.id)}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  item.active ? 'bg-white/20 shadow-lg' : 'group-hover:bg-spa-green/20'
                }`}>
                  <Icon size={20} className={`transition-all duration-300 ${
                    item.active ? 'text-white' : 'text-spa-green group-hover:scale-110'
                  }`} />
                </div>
                <span className={`font-semibold transition-all duration-300 ${
                  item.active ? 'text-white' : 'text-spa-green-dark group-hover:text-spa-green'
                }`}>
                  {item.label}
                </span>
              </div>
              
              {item.badge && item.badge > 0 && (
                <div className="relative">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-xl animate-pulse">
                    {item.badge}
                  </span>
                  <span className="absolute top-0 right-0 w-7 h-7 bg-red-400 rounded-full animate-ping opacity-75"></span>
                </div>
              )}
              
              {/* Animated background */}
              {!item.active && (
                <div className="absolute inset-0 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          );
        })}
        
        <button 
          onClick={handleLogout}
          className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 text-red-600 w-full mt-10 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-red-200"
        >
          <div className="p-3 rounded-xl group-hover:bg-red-100 transition-all duration-300">
            <LogOut size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-semibold">Log Out</span>
        </button>
      </div>
    </div>
  );
};
