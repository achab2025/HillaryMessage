
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

  return (
    <div className="p-6">
      <Link to="/" className="text-2xl font-bold text-spa-blue hidden md:block">
        Serene Touch
      </Link>
      <div className="mt-8 space-y-2">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg font-medium">Admin Panel</h2>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>

        <Link to="/admin" className="flex items-center space-x-2 p-2 rounded-md bg-spa-blue/10 text-spa-blue">
          <BarChart3 size={18} />
          <span>Dashboard</span>
        </Link>
        
        <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
          <Calendar size={18} />
          <span>Appointments</span>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
          <Users size={18} />
          <span>Customers</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span>Contact Messages</span>
          </div>
          {contactCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {contactCount}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
          <CircleDollarSign size={18} />
          <span>Finances</span>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-spa-blue/10 cursor-pointer">
          <Settings size={18} />
          <span>Settings</span>
        </div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-100 text-red-600 w-full mt-8"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};
