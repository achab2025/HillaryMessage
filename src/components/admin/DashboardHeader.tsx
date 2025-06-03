
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface DashboardHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const DashboardHeader = ({ searchTerm, setSearchTerm }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-spa-green to-spa-green-dark rounded-xl shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-spa-green via-spa-green-dark to-spa-green bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-spa-gray text-lg font-medium mt-1">Manage your spa operations with elegance</p>
          </div>
        </div>
      </div>
      
      <div className="relative w-full lg:w-auto group">
        <div className="absolute inset-0 bg-gradient-to-r from-spa-green/20 to-spa-green-dark/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-spa-gray group-focus-within:text-spa-green transition-colors duration-300" />
          <Input
            placeholder="Search appointments, customers, or anything..."
            className="pl-12 pr-6 py-4 w-full lg:w-96 bg-white/90 backdrop-blur-xl border-2 border-spa-green/20 focus:border-spa-green focus:ring-4 focus:ring-spa-green/10 transition-all duration-300 hover:shadow-xl rounded-2xl text-base font-medium placeholder:text-spa-gray/60"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
