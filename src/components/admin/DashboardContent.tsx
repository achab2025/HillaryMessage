
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardStats } from "./DashboardStats";
import { AppointmentsTab } from "./AppointmentsTab";
import { CustomersTab } from "./CustomersTab";
import { ContactSubmissions } from "./ContactSubmissions";
import { FinancesTab } from "./FinancesTab";
import { SettingsTab } from "./SettingsTab";

interface DashboardContentProps {
  activeTab: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  appointments: any[];
  customers: any[];
  contactCount: number;
  filteredAppointments: any[];
  filteredCustomers: any[];
  formatDate: (dateString: string) => string;
}

export const DashboardContent = ({
  activeTab,
  searchTerm,
  setSearchTerm,
  appointments,
  customers,
  contactCount,
  filteredAppointments,
  filteredCustomers,
  formatDate
}: DashboardContentProps) => {
  const renderActiveContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <DashboardStats 
              appointmentsCount={appointments.length}
              customersCount={customers.length}
              weeklyRevenue="$2,450"
              unreadMessagesCount={contactCount}
            />
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200/60 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200/60">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Appointments</h3>
                </div>
                <div className="p-6">
                  <AppointmentsTab 
                    appointments={filteredAppointments.slice(0, 5)} 
                    formatDate={formatDate} 
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200/60 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200/60">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Customers</h3>
                </div>
                <div className="p-6">
                  <CustomersTab customers={filteredCustomers.slice(0, 5)} />
                </div>
              </div>
            </div>
          </div>
        );
      case "appointments":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/60">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="text-xl font-semibold text-gray-900">All Appointments</h2>
            </div>
            <div className="p-6">
              <AppointmentsTab appointments={filteredAppointments} formatDate={formatDate} />
            </div>
          </div>
        );
      case "customers":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/60">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="text-xl font-semibold text-gray-900">All Customers</h2>
            </div>
            <div className="p-6">
              <CustomersTab customers={filteredCustomers} />
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/60">
            <ContactSubmissions />
          </div>
        );
      case "finances":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/60">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="text-xl font-semibold text-gray-900">Financial Overview</h2>
            </div>
            <div className="p-6">
              <FinancesTab />
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/60">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
            </div>
            <div className="p-6">
              <SettingsTab />
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {activeTab === "dashboard" && (
          <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        )}
        
        <div>
          {renderActiveContent()}
        </div>
      </div>
    </div>
  );
};
