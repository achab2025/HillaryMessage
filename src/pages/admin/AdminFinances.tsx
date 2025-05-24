
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CircleDollarSign, TrendingUp, TrendingDown, Calendar, 
  Download, CreditCard, Banknote, Wallet, Target 
} from "lucide-react";

const AdminFinances = () => {
  const revenueData = [
    { period: "Today", amount: "GHS 850", change: "+12%", trend: "up" },
    { period: "This Week", amount: "GHS 4,200", change: "+8%", trend: "up" },
    { period: "This Month", amount: "GHS 18,500", change: "+15%", trend: "up" },
    { period: "This Year", amount: "GHS 186,000", change: "+23%", trend: "up" }
  ];

  const recentTransactions = [
    { id: "1", customer: "John Doe", service: "Deep Tissue Massage", amount: "GHS 150", date: "2025-01-24", method: "Mobile Money" },
    { id: "2", customer: "Alice Johnson", service: "Swedish Massage", amount: "GHS 200", date: "2025-01-24", method: "Cash" },
    { id: "3", customer: "Robert Brown", service: "Hot Stone Therapy", amount: "GHS 180", date: "2025-01-23", method: "Card" },
    { id: "4", customer: "Emma Wilson", service: "Aromatherapy", amount: "GHS 160", date: "2025-01-23", method: "Mobile Money" }
  ];

  const getPaymentMethodColor = (method: string) => {
    switch (method) {
      case "Cash": return "bg-green-100 text-green-800 border-green-200";
      case "Card": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Mobile Money": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
            Financial Overview
          </h1>
          <p className="text-muted-foreground">Track revenue, expenses, and financial performance</p>
        </div>
        <Button className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueData.map((data, index) => (
          <Card key={data.period} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-spa-green transition-colors">
                {data.period}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-spa-green-dark transition-colors">
                    {data.amount}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {data.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${data.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {data.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br ${
                  index === 0 ? "from-blue-100 to-blue-200" :
                  index === 1 ? "from-green-100 to-green-200" :
                  index === 2 ? "from-purple-100 to-purple-200" :
                  "from-orange-100 to-orange-200"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <CircleDollarSign className={`h-6 w-6 ${
                    index === 0 ? "text-blue-600" :
                    index === 1 ? "text-green-600" :
                    index === 2 ? "text-purple-600" :
                    "text-orange-600"
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Methods & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Wallet className="h-5 w-5" />
              Payment Methods Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div className="flex items-center gap-2">
                <Banknote className="h-4 w-4 text-green-600" />
                <span>Cash</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">45%</div>
                <div className="text-sm text-gray-600">GHS 8,325</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span>Card</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">35%</div>
                <div className="text-sm text-gray-600">GHS 6,475</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div className="flex items-center gap-2">
                <CircleDollarSign className="h-4 w-4 text-purple-600" />
                <span>Mobile Money</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">20%</div>
                <div className="text-sm text-gray-600">GHS 3,700</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Target className="h-5 w-5" />
              Monthly Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Revenue Target</span>
                <span>GHS 18,500 / GHS 20,000</span>
              </div>
              <div className="w-full bg-white/60 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "92.5%" }}></div>
              </div>
              <div className="text-xs text-green-700">92.5% achieved</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Appointments</span>
                <span>185 / 200</span>
              </div>
              <div className="w-full bg-white/60 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92.5%" }}></div>
              </div>
              <div className="text-xs text-blue-700">92.5% achieved</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>New Customers</span>
                <span>12 / 15</span>
              </div>
              <div className="w-full bg-white/60 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <div className="text-xs text-purple-700">80% achieved</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-spa-green" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{transaction.customer}</div>
                  <div className="text-sm text-gray-600">{transaction.service}</div>
                  <div className="text-xs text-gray-500">{transaction.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-spa-green-dark">{transaction.amount}</div>
                  <Badge className={`${getPaymentMethodColor(transaction.method)} text-xs`}>
                    {transaction.method}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminFinances;
