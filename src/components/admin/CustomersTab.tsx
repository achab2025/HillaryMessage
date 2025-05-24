
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Eye, Edit, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  appointments: number;
}

interface CustomersTabProps {
  customers: Customer[];
}

export const CustomersTab = ({ customers }: CustomersTabProps) => {
  const { toast } = useToast();
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const handleView = (customerId: string, customerName: string) => {
    setSelectedCustomer(customerId);
    toast({
      title: "Customer Profile",
      description: `Viewing ${customerName}'s profile and history.`,
    });
    // In a real app, this would open a customer details modal or navigate to profile page
  };

  const handleEdit = (customerId: string, customerName: string) => {
    toast({
      title: "Edit Customer",
      description: `Opening edit form for ${customerName}.`,
    });
    // In a real app, this would open an edit modal or navigate to edit page
  };

  const handleContact = (customer: Customer, method: 'phone' | 'email') => {
    if (method === 'phone') {
      toast({
        title: "Calling Customer",
        description: `Initiating call to ${customer.name} at ${customer.phone}.`,
      });
      // In a real app, this could trigger a phone call or open dialer
    } else {
      toast({
        title: "Email Customer",
        description: `Opening email composer for ${customer.name}.`,
      });
      // In a real app, this could open email client or modal
    }
  };

  const handleAddCustomer = () => {
    toast({
      title: "Add New Customer",
      description: "Opening new customer registration form...",
    });
    // In a real app, this would open a new customer modal or navigate to create page
  };

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-spa-green/10">
      <div className="flex justify-between items-center p-6 border-b border-spa-green/10 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
        <h3 className="text-xl font-semibold text-spa-green">Customer List</h3>
        <Button 
          size="sm" 
          onClick={handleAddCustomer}
          className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Appointments</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-spa-green/10">
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr 
                  key={customer.id} 
                  className={`hover:bg-gradient-to-r hover:from-spa-green/5 hover:to-transparent transition-all duration-300 group ${
                    selectedCustomer === customer.id ? 'bg-spa-green/10' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 group-hover:text-spa-green transition-colors duration-300">{customer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{customer.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{customer.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-spa-green/10 to-spa-green-dark/10 text-spa-green">
                      {customer.appointments}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleView(customer.id, customer.name)}
                        className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                        title="View Profile"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEdit(customer.id, customer.name)}
                        className="hover:bg-spa-green/10 hover:text-spa-green transition-all duration-300"
                        title="Edit Customer"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleContact(customer, 'phone')}
                        className="hover:bg-green-50 hover:text-green-600 transition-all duration-300"
                        title="Call Customer"
                      >
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleContact(customer, 'email')}
                        className="hover:bg-purple-50 hover:text-purple-600 transition-all duration-300"
                        title="Email Customer"
                      >
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="text-muted-foreground">
                    <Users className="mx-auto h-12 w-12 text-spa-green/40 mb-4" />
                    <p className="text-lg font-medium">No customers found</p>
                    <p className="text-sm">Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
