
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

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
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-medium">Customer List</h3>
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Appointments</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-muted/20">
                  <td className="px-4 py-3 text-sm font-medium">{customer.name}</td>
                  <td className="px-4 py-3 text-sm">{customer.email}</td>
                  <td className="px-4 py-3 text-sm">{customer.phone}</td>
                  <td className="px-4 py-3 text-sm">{customer.appointments}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                  No customers found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
