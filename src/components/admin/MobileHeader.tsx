
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileHeaderProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-2xl border-b border-spa-green/20 p-6 flex justify-between items-center md:hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5 pointer-events-none" />
      <div className="flex items-center gap-3 relative z-10">
        <div className="p-2 bg-gradient-to-br from-spa-green to-spa-green-dark rounded-xl shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
      </div>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hover:bg-spa-green/10 transition-all duration-300 rounded-xl p-3 relative z-10"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </header>
  );
};
