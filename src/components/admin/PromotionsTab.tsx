
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Plus, Edit, Calendar, Percent, Users } from "lucide-react";

export const PromotionsTab = () => {
  const promotions = [
    {
      id: "1",
      title: "New Customer Special",
      description: "20% off first massage session",
      discount: "20%",
      type: "Percentage",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      status: "Active",
      used: 45,
      limit: 100,
      code: "WELCOME20"
    },
    {
      id: "2",
      title: "Spring Wellness Package",
      description: "Buy 3 sessions, get 1 free",
      discount: "25%",
      type: "Package Deal",
      startDate: "2024-03-15",
      endDate: "2024-05-15",
      status: "Active",
      used: 12,
      limit: 50,
      code: "SPRING25"
    },
    {
      id: "3",
      title: "Couples Massage Special",
      description: "$50 off couples massage sessions",
      discount: "$50",
      type: "Fixed Amount",
      startDate: "2024-02-14",
      endDate: "2024-02-28",
      status: "Expired",
      used: 28,
      limit: 30,
      code: "COUPLES50"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Promotions & Offers</h3>
          <p className="text-gray-600 mt-1">Create and manage promotional campaigns</p>
        </div>
        <Button className="bg-spa-green hover:bg-spa-green-dark">
          <Plus className="w-4 h-4 mr-2" />
          Create Promotion
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <p className="text-sm text-gray-600">Active Promotions</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">85</div>
            <p className="text-sm text-gray-600">Total Redemptions</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Percent className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$2,340</div>
            <p className="text-sm text-gray-600">Revenue from Promos</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {promotions.map((promo) => (
          <Card key={promo.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{promo.title}</h4>
                    <Badge className={`${
                      promo.status === "Active" ? "bg-green-100 text-green-800" : 
                      promo.status === "Expired" ? "bg-red-100 text-red-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {promo.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{promo.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Discount</p>
                      <p className="font-semibold text-spa-green">{promo.discount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Code</p>
                      <p className="font-semibold">{promo.code}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Usage</p>
                      <p className="font-semibold">{promo.used}/{promo.limit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Valid Until</p>
                      <p className="font-semibold">{promo.endDate}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Schedule
                  </Button>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-spa-green h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(promo.used / promo.limit) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {((promo.used / promo.limit) * 100).toFixed(1)}% of limit used
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
