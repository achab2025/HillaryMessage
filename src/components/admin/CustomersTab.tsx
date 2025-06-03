
import { Button } from "@/components/ui/button";
import { PlusCircle, Users } from "lucide-react";

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
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{customers.length} customers</p>
        <Button size="sm" className="bg-spa-green hover:bg-spa-green-dark">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{customer.email}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{customer.phone}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-spa-green/10 text-spa-green">
                      {customer.appointments}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">View</Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">Edit</Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center">
                  <div className="text-gray-500">
                    <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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
