
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentsTab } from "@/components/admin/AppointmentsTab";
import { CustomersTab } from "@/components/admin/CustomersTab";
import { ContactSubmissions } from "@/components/admin/ContactSubmissions";

interface AdminTabsContainerProps {
  filteredAppointments: any[];
  filteredCustomers: any[];
  formatDate: (dateString: string) => string;
}

export const AdminTabsContainer = ({
  filteredAppointments,
  filteredCustomers,
  formatDate
}: AdminTabsContainerProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-spa-green/10 overflow-hidden">
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="mb-6 bg-spa-green/5 border-b border-spa-green/10 rounded-none w-full justify-start p-1">
          <TabsTrigger 
            value="appointments" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
          >
            Appointments
          </TabsTrigger>
          <TabsTrigger 
            value="customers"
            className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
          >
            Customers
          </TabsTrigger>
          <TabsTrigger 
            value="contact"
            className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-spa-green rounded-lg transition-all duration-300"
          >
            Contact Messages
          </TabsTrigger>
        </TabsList>
        
        <div className="p-6">
          <TabsContent value="appointments">
            <AppointmentsTab 
              appointments={filteredAppointments} 
              formatDate={formatDate} 
            />
          </TabsContent>
          
          <TabsContent value="customers">
            <CustomersTab customers={filteredCustomers} />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactSubmissions />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
