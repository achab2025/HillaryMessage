
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
    <div className="min-h-screen bg-background">
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex">
        <aside className={`
          bg-card border-r border-border w-full md:w-64 md:min-h-screen
          ${isMobileMenuOpen ? 'block animate-slide-in-right' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-40 h-screen md:h-auto overflow-y-auto
          transition-all duration-200
        `}>
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          <div className="relative z-50 bg-card h-full">
            <AdminSidebar 
              contactCount={contactCount} 
              handleLogout={handleLogout} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </aside>

        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};
