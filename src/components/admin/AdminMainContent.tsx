
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { AdminTabsContainer } from "@/components/admin/AdminTabsContainer";

interface AdminMainContentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  appointmentsCount: number;
  customersCount: number;
  contactCount: number;
  filteredAppointments: any[];
  filteredCustomers: any[];
  formatDate: (dateString: string) => string;
}

export const AdminMainContent = ({
  searchTerm,
  setSearchTerm,
  appointmentsCount,
  customersCount,
  contactCount,
  filteredAppointments,
  filteredCustomers,
  formatDate
}: AdminMainContentProps) => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <DashboardStats 
          appointmentsCount={appointmentsCount}
          customersCount={customersCount}
          weeklyRevenue="GHS 4,200"
          unreadMessagesCount={contactCount}
        />
        
        <AdminTabsContainer
          filteredAppointments={filteredAppointments}
          filteredCustomers={filteredCustomers}
          formatDate={formatDate}
        />
      </div>
    </main>
  );
};
