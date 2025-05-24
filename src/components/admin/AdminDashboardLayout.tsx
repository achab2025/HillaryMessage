
import { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

interface AdminDashboardLayoutProps {
  children: ReactNode;
  isMobileMenuOpen: boolean;
  contactCount: number;
  handleLogout: () => void;
}

export const AdminDashboardLayout = ({
  children,
  isMobileMenuOpen,
  contactCount,
  handleLogout
}: AdminDashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-cream via-spa-beige to-spa-cream">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - desktop always visible, mobile conditionally */}
        <aside className={`
          bg-white/90 backdrop-blur-md w-full md:w-64 md:min-h-screen shadow-xl border-r border-spa-green/10
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
          fixed md:sticky top-0 md:top-0 z-30 h-screen md:h-auto
        `}>
          <AdminSidebar contactCount={contactCount} handleLogout={handleLogout} />
        </aside>

        {children}
      </div>
    </div>
  );
};
