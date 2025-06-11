
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign } from "lucide-react";

export const ReportsTab = () => {
  const reports = [
    {
      id: "1",
      name: "Monthly Revenue Report",
      description: "Detailed breakdown of revenue by service type and therapist",
      type: "Financial",
      lastGenerated: "2024-03-15",
      frequency: "Monthly",
      format: "PDF",
      status: "Ready"
    },
    {
      id: "2",
      name: "Customer Analytics",
      description: "Customer demographics, retention rates, and booking patterns",
      type: "Analytics",
      lastGenerated: "2024-03-14",
      frequency: "Weekly",
      format: "Excel",
      status: "Ready"
    },
    {
      id: "3",
      name: "Staff Performance",
      description: "Individual therapist performance metrics and client feedback",
      type: "HR",
      lastGenerated: "2024-03-10",
      frequency: "Monthly",
      format: "PDF",
      status: "Generating"
    },
    {
      id: "4",
      name: "Inventory Report",
      description: "Product usage, stock levels, and reorder recommendations",
      type: "Operations",
      lastGenerated: "2024-03-12",
      frequency: "Bi-weekly",
      format: "Excel",
      status: "Ready"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Business Reports</h3>
          <p className="text-gray-600 mt-1">Generate and download comprehensive business reports</p>
        </div>
        <Button className="bg-spa-green hover:bg-spa-green-dark">
          <FileText className="w-4 h-4 mr-2" />
          Create Custom Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <p className="text-sm text-gray-600">Total Reports</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <p className="text-sm text-gray-600">Downloads</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <p className="text-sm text-gray-600">Scheduled</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
            <p className="text-sm text-gray-600">Accuracy</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{report.name}</h4>
                    <Badge className={`${
                      report.status === "Ready" ? "bg-green-100 text-green-800" :
                      report.status === "Generating" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {report.status}
                    </Badge>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Last Generated</p>
                      <p className="font-semibold">{report.lastGenerated}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Frequency</p>
                      <p className="font-semibold">{report.frequency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Format</p>
                      <p className="font-semibold">{report.format}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="font-semibold">{report.status}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  {report.status === "Ready" && (
                    <Button className="bg-spa-green hover:bg-spa-green-dark">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-1" />
                    Schedule
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
