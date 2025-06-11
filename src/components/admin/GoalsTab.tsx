
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Plus, Edit, Calendar } from "lucide-react";

export const GoalsTab = () => {
  const goals = [
    {
      id: "1",
      title: "Monthly Revenue Target",
      description: "Achieve $8,000 in monthly revenue",
      target: 8000,
      current: 6750,
      unit: "$",
      period: "March 2024",
      status: "In Progress",
      dueDate: "2024-03-31",
      category: "Financial"
    },
    {
      id: "2",
      title: "New Customer Acquisition",
      description: "Acquire 50 new customers this quarter",
      target: 50,
      current: 38,
      unit: "customers",
      period: "Q1 2024",
      status: "In Progress",
      dueDate: "2024-03-31",
      category: "Growth"
    },
    {
      id: "3",
      title: "Customer Satisfaction",
      description: "Maintain 4.8+ star average rating",
      target: 4.8,
      current: 4.9,
      unit: "stars",
      period: "Ongoing",
      status: "Achieved",
      dueDate: "Ongoing",
      category: "Quality"
    },
    {
      id: "4",
      title: "Staff Training Hours",
      description: "Complete 40 hours of staff training",
      target: 40,
      current: 28,
      unit: "hours",
      period: "Q1 2024",
      status: "In Progress",
      dueDate: "2024-03-31",
      category: "Development"
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Achieved":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "At Risk":
        return "bg-yellow-100 text-yellow-800";
      case "Overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Financial":
        return "bg-green-100 text-green-800";
      case "Growth":
        return "bg-blue-100 text-blue-800";
      case "Quality":
        return "bg-purple-100 text-purple-800";
      case "Development":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Business Goals</h3>
          <p className="text-gray-600 mt-1">Track and manage your business objectives</p>
        </div>
        <Button className="bg-spa-green hover:bg-spa-green-dark">
          <Plus className="w-4 h-4 mr-2" />
          Set New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <p className="text-sm text-gray-600">Total Goals</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <p className="text-sm text-gray-600">Achieved</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4</div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">75%</div>
            <p className="text-sm text-gray-600">Avg Progress</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <Card key={goal.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{goal.title}</h4>
                    <Badge className={getStatusColor(goal.status)}>
                      {goal.status}
                    </Badge>
                    <Badge className={getCategoryColor(goal.category)}>
                      {goal.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Current</p>
                      <p className="font-semibold text-lg">
                        {goal.unit === "$" ? "$" : ""}{goal.current.toLocaleString()}{goal.unit !== "$" ? ` ${goal.unit}` : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Target</p>
                      <p className="font-semibold text-lg">
                        {goal.unit === "$" ? "$" : ""}{goal.target.toLocaleString()}{goal.unit !== "$" ? ` ${goal.unit}` : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Period</p>
                      <p className="font-semibold">{goal.period}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Due Date</p>
                      <p className="font-semibold">{goal.dueDate}</p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">
                        {getProgressPercentage(goal.current, goal.target).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-spa-green h-3 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage(goal.current, goal.target)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
