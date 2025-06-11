
import { Input } from "@/components/ui/input";
import { Search, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const DashboardHeader = ({ searchTerm, setSearchTerm }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Welcome back! Here's what's happening at your spa today.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search appointments, customers..."
              className="pl-10 w-full lg:w-80 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-spa-green focus:ring-spa-green/20 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm shadow-sm">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm shadow-sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
