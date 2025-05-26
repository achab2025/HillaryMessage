
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
          <div className="space-y-6">
            <DashboardStats 
              appointmentsCount={appointments.length}
              customersCount={customers.length}
              weeklyRevenue="$2,450"
              unreadMessagesCount={contactCount}
            />
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-spa-green/10 overflow-hidden">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="mb-6 bg-spa-green/5 border-b border-spa-green/10 rounded-none w-full justify-start p-1">
                  <TabsTrigger 
                    value="appointments" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
                  >
                    Recent Appointments
                  </TabsTrigger>
                  <TabsTrigger 
                    value="customers"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
                  >
                    Recent Customers
                  </TabsTrigger>
                </TabsList>
                
                <div className="p-6">
                  <TabsContent value="appointments">
                    <AppointmentsTab 
                      appointments={filteredAppointments.slice(0, 5)} 
                      formatDate={formatDate} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="customers">
                    <CustomersTab customers={filteredCustomers.slice(0, 5)} />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        );
      case "appointments":
        return <AppointmentsTab appointments={filteredAppointments} formatDate={formatDate} />;
      case "customers":
        return <CustomersTab customers={filteredCustomers} />;
      case "contact":
        return <ContactSubmissions />;
      case "finances":
        return <FinancesTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {activeTab === "dashboard" && (
          <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        )}
        
        {renderActiveContent()}
      </div>
    </main>
  );
};
