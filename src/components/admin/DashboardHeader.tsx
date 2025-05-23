
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DashboardHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const DashboardHeader = ({ searchTerm, setSearchTerm }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-spa-green via-spa-green-dark to-spa-green bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">Manage your spa operations with ease</p>
      </div>
      
      <div className="relative w-full sm:w-auto group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-spa-green transition-colors duration-300" />
        <Input
          placeholder="Search appointments or customers..."
          className="pl-10 w-full sm:w-80 bg-white/80 backdrop-blur-md border-spa-green/20 focus:border-spa-green focus:ring-spa-green/20 transition-all duration-300 hover:shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};
