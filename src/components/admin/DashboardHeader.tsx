
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DashboardHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const DashboardHeader = ({ searchTerm, setSearchTerm }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search appointments or customers..."
          className="pl-8 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
