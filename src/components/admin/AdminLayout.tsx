
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex">
        <aside className={`
          bg-white/95 backdrop-blur-lg w-full md:w-80 md:min-h-screen shadow-2xl border-r border-gray-200/60
          ${isMobileMenuOpen ? 'block animate-slide-in-right' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-40 h-screen md:h-auto overflow-y-auto
          transition-all duration-300 ease-in-out
        `}>
          {/* Mobile overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          <div className="relative z-50 bg-white/95 backdrop-blur-lg h-full">
            <AdminSidebar 
              contactCount={contactCount} 
              handleLogout={handleLogout} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </aside>

        <main className="flex-1 min-h-screen backdrop-blur-sm">
          {children}
        </main>
      </div>
    </div>
  );
};
