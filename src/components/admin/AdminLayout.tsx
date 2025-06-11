
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
          bg-white w-full md:w-80 md:min-h-screen shadow-xl border-r border-gray-200/60
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

        <main className="flex-1 min-h-screen backdrop-blur-sm">
          {children}
        </main>
      </div>
    </div>
  );
};
