
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminMobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const AdminMobileHeader = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}: AdminMobileHeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-spa-green/10 p-4 flex justify-between items-center md:hidden">
      <h1 className="text-xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
        Admin Dashboard
      </h1>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hover:bg-spa-green/10 transition-all duration-300"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </Button>
    </header>
  );
};
