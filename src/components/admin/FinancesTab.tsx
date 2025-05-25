
import { Button } from "@/components/ui/button";
import { PlusCircle, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

export const FinancesTab = () => {
  const mockFinancialData = [
    { period: "This Week", revenue: 2450, expenses: 800, profit: 1650 },
    { period: "This Month", revenue: 12750, expenses: 4200, profit: 8550 },
    { period: "This Quarter", revenue: 34200, expenses: 12600, profit: 21600 },
  ];

  const recentTransactions = [
    { id: "1", client: "John Doe", service: "Deep Tissue Massage", amount: 85, date: "2025-04-20", status: "completed" },
    { id: "2", client: "Alice Johnson", service: "Swedish Massage", amount: 75, date: "2025-04-20", status: "completed" },
    { id: "3", client: "Robert Brown", service: "Hot Stone Therapy", amount: 95, date: "2025-04-19", status: "pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockFinancialData.map((data, index) => (
          <div key={data.period} className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg p-6 border border-spa-green/10">
            <h4 className="text-lg font-semibold text-spa-green mb-4">{data.period}</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Revenue</span>
                <span className="font-semibold text-green-600">${data.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Expenses</span>
                <span className="font-semibold text-red-600">${data.expenses}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm font-medium">Profit</span>
                <span className="font-bold text-spa-green">${data.profit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-spa-green/10">
        <div className="flex justify-between items-center p-6 border-b border-spa-green/10 bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
          <h3 className="text-xl font-semibold text-spa-green flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Recent Transactions
          </h3>
          <Button size="sm" className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green transition-all duration-300 shadow-md hover:shadow-lg">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-spa-green/5 to-spa-green-dark/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-spa-green">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-spa-green/10">
              {recentTransactions.map((transaction, index) => (
                <tr 
                  key={transaction.id} 
                  className="hover:bg-gradient-to-r hover:from-spa-green/5 hover:to-transparent transition-all duration-300 group"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 group-hover:text-spa-green transition-colors duration-300">
                    {transaction.client}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{transaction.service}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">${transaction.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                      ${transaction.status === 'completed' ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800' : 
                        'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800'}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
