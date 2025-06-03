
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200/60 px-6 py-4 flex justify-between items-center md:hidden">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-spa-green rounded-lg flex items-center justify-center">
          <LayoutDashboard className="h-4 w-4 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-gray-900">
          Admin Dashboard
        </h1>
      </div>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hover:bg-gray-100 rounded-lg"
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </header>
  );
};
