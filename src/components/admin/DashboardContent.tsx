
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
            
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 overflow-hidden transition-all duration-300 hover:shadow-3xl">
              <div className="bg-gradient-to-r from-spa-green/10 via-spa-green/5 to-transparent p-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-t-3xl">
                  <Tabs defaultValue="appointments" className="w-full">
                    <TabsList className="mb-0 bg-transparent border-b border-spa-green/10 rounded-none w-full justify-start p-0 h-auto">
                      <TabsTrigger 
                        value="appointments" 
                        className="data-[state=active]:bg-spa-green data-[state=active]:text-white data-[state=active]:shadow-lg rounded-none border-b-2 border-transparent data-[state=active]:border-spa-green transition-all duration-300 px-8 py-4 font-semibold"
                      >
                        Recent Appointments
                      </TabsTrigger>
                      <TabsTrigger 
                        value="customers"
                        className="data-[state=active]:bg-spa-green data-[state=active]:text-white data-[state=active]:shadow-lg rounded-none border-b-2 border-transparent data-[state=active]:border-spa-green transition-all duration-300 px-8 py-4 font-semibold"
                      >
                        Recent Customers
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              
              <div className="p-8">
                <Tabs defaultValue="appointments" className="w-full">
                  <TabsContent value="appointments" className="mt-0">
                    <AppointmentsTab 
                      appointments={filteredAppointments.slice(0, 5)} 
                      formatDate={formatDate} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="customers" className="mt-0">
                    <CustomersTab customers={filteredCustomers.slice(0, 5)} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        );
      case "appointments":
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 p-8">
            <AppointmentsTab appointments={filteredAppointments} formatDate={formatDate} />
          </div>
        );
      case "customers":
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 p-8">
            <CustomersTab customers={filteredCustomers} />
          </div>
        );
      case "contact":
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 p-8">
            <ContactSubmissions />
          </div>
        );
      case "finances":
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 p-8">
            <FinancesTab />
          </div>
        );
      case "settings":
        return (
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-spa-green/20 p-8">
            <SettingsTab />
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {activeTab === "dashboard" && (
          <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        )}
        
        <div className="animate-fade-in">
          {renderActiveContent()}
        </div>
      </div>
    </main>
  );
};
