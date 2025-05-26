
import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { MobileHeader } from "./MobileHeader";

interface AdminLayoutProps {
  contactCount: number;
  handleLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

export const AdminLayout = ({
  contactCount,
  handleLogout,
  activeTab,
  setActiveTab,
  children
}: AdminLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-spa-beige to-spa-cream">
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex flex-col md:flex-row">
        <aside className={`
          bg-white/90 backdrop-blur-md w-full md:w-64 md:min-h-screen shadow-xl border-r border-spa-green/10
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
        `}>
          <AdminSidebar 
            contactCount={contactCount} 
            handleLogout={handleLogout} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </aside>

        {children}
      </div>
    </div>
  );
};
