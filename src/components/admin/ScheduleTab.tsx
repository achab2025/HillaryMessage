
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Edit, Users } from "lucide-react";

export const ScheduleTab = () => {
  const schedule = [
    {
      id: "1",
      therapist: "Jane Smith",
      date: "2024-03-18",
      slots: [
        { time: "9:00 AM", client: "John Doe", service: "Deep Tissue", duration: 60, status: "confirmed" },
        { time: "10:30 AM", client: "Available", service: "", duration: 60, status: "available" },
        { time: "12:00 PM", client: "Emily Johnson", service: "Swedish", duration: 90, status: "confirmed" },
        { time: "2:00 PM", client: "Available", service: "", duration: 60, status: "available" },
        { time: "3:30 PM", client: "Sarah Wilson", service: "Hot Stone", duration: 60, status: "pending" }
      ]
    },
    {
      id: "2",
      therapist: "Michael Johnson",
      date: "2024-03-18",
      slots: [
        { time: "10:00 AM", client: "David Chen", service: "Swedish", duration: 60, status: "confirmed" },
        { time: "11:30 AM", client: "Available", service: "", duration: 60, status: "available" },
        { time: "1:00 PM", client: "Lisa Brown", service: "Aromatherapy", duration: 90, status: "confirmed" },
        { time: "3:00 PM", client: "Available", service: "", duration: 60, status: "available" },
        { time: "4:30 PM", client: "Available", service: "", duration: 60, status: "available" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "available":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Schedule Management</h3>
          <p className="text-gray-600 mt-1">Manage therapist schedules and appointments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            View Calendar
          </Button>
          <Button className="bg-spa-green hover:bg-spa-green-dark">
            <Plus className="w-4 h-4 mr-2" />
            Add Time Slot
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">28</div>
            <p className="text-sm text-gray-600">Total Appointments</p>
            <p className="text-xs text-blue-600">This week</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
            <p className="text-sm text-gray-600">Available Slots</p>
            <p className="text-xs text-green-600">Today</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
            <p className="text-sm text-gray-600">Utilization Rate</p>
            <p className="text-xs text-purple-600">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {schedule.map((therapistSchedule) => (
          <Card key={therapistSchedule.id} className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{therapistSchedule.therapist}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{therapistSchedule.date}</Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Schedule
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {therapistSchedule.slots.map((slot, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-gray-900 w-20">
                        {slot.time}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {slot.client === "Available" ? "Available Slot" : slot.client}
                        </p>
                        {slot.service && (
                          <p className="text-sm text-gray-600">{slot.service} • {slot.duration} min</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(slot.status)}>
                        {slot.status}
                      </Badge>
                      {slot.status === "available" && (
                        <Button size="sm" className="bg-spa-green hover:bg-spa-green-dark">
                          Book
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
