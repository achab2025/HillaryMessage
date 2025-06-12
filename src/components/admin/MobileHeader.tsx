
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileHeaderProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/60 px-6 py-4 flex justify-between items-center md:hidden sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-spa-green to-spa-teal rounded-xl flex items-center justify-center shadow-md">
          <LayoutDashboard className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-xs text-gray-500">Control Center</p>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hover:bg-gray-100 rounded-xl transition-all duration-300 shadow-sm"
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="h-5 w-5 transition-transform duration-300" />
        )}
      </Button>
    </header>
  );
};
