
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Plus, Edit, Trash2, Calendar, Clock } from "lucide-react";

export const StaffManagementTab = () => {
  const staff = [
    {
      id: "1",
      name: "Jane Smith",
      role: "Senior Therapist",
      email: "jane@hillary-massage.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      specialties: ["Deep Tissue", "Swedish", "Hot Stone"],
      schedule: "Mon-Fri 9AM-5PM",
      avatar: "JS"
    },
    {
      id: "2",
      name: "Michael Johnson",
      role: "Massage Therapist",
      email: "michael@hillary-massage.com",
      phone: "+1 (555) 234-5678",
      status: "Active",
      specialties: ["Swedish", "Aromatherapy"],
      schedule: "Tue-Sat 10AM-6PM",
      avatar: "MJ"
    },
    {
      id: "3",
      name: "Sarah Williams",
      role: "Spa Specialist",
      email: "sarah@hillary-massage.com",
      phone: "+1 (555) 345-6789",
      status: "On Leave",
      specialties: ["Hot Stone", "Reflexology"],
      schedule: "Wed-Sun 11AM-7PM",
      avatar: "SW"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Staff Management</h3>
          <p className="text-gray-600 mt-1">Manage your therapy team and schedules</p>
        </div>
        <Button className="bg-spa-green hover:bg-spa-green-dark">
          <Plus className="w-4 h-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
          <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{member.avatar}</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <Badge className={`${
                  member.status === "Active" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                }`}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Contact</p>
                <p className="text-sm font-medium">{member.email}</p>
                <p className="text-sm font-medium">{member.phone}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Specialties</p>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{member.schedule}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
