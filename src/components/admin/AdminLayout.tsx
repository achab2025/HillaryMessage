
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
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-white to-spa-beige">
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex flex-col md:flex-row">
        <aside className={`
          bg-white/95 backdrop-blur-xl w-full md:w-72 md:min-h-screen shadow-2xl border-r border-spa-green/20
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
          before:absolute before:inset-0 before:bg-gradient-to-b before:from-spa-green/5 before:to-transparent before:pointer-events-none
        `}>
          <AdminSidebar 
            contactCount={contactCount} 
            handleLogout={handleLogout} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </aside>

        <main className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-spa-cream/30 pointer-events-none" />
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
