
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Filter, Plus, Clock, User, Phone, Mail } from "lucide-react";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock appointments data
  const mockAppointments = [
    {
      id: "1",
      client: "John Doe",
      service: "Deep Tissue Massage",
      date: "2025-01-24",
      time: "14:00",
      duration: 60,
      therapist: "Jane Smith",
      status: "confirmed",
      phone: "+233 24 123 4567",
      email: "john@example.com",
      price: "GHS 150"
    },
    {
      id: "2",
      client: "Alice Johnson",
      service: "Swedish Massage",
      date: "2025-01-24",
      time: "10:30",
      duration: 90,
      therapist: "Michael Johnson",
      status: "pending",
      phone: "+233 50 987 6543",
      email: "alice@example.com",
      price: "GHS 200"
    },
    {
      id: "3",
      client: "Robert Brown",
      service: "Hot Stone Therapy",
      date: "2025-01-25",
      time: "16:00",
      duration: 60,
      therapist: "Sarah Williams",
      status: "completed",
      phone: "+233 24 555 0123",
      email: "robert@example.com",
      price: "GHS 180"
    }
  ];

  useEffect(() => {
    setAppointments(mockAppointments);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800 border-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed": return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredAppointments = appointments.filter(apt => 
    (apt.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
     apt.service.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === "all" || apt.status === filterStatus)
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
            Appointments Management
          </h1>
          <p className="text-muted-foreground">Manage and track all client appointments</p>
        </div>
        <Button className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green">
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {["all", "confirmed", "pending", "completed"].map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus(status)}
                  className="capitalize"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-spa-green bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-spa-green transition-colors">
                  {appointment.client}
                </CardTitle>
                <Badge className={`${getStatusColor(appointment.status)} capitalize font-medium`}>
                  {appointment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-spa-green-dark font-medium">{appointment.service}</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-spa-green" />
                  <span>{appointment.date} at {appointment.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-spa-green" />
                  <span>{appointment.duration} minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-spa-green" />
                  <span>{appointment.therapist}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-spa-green" />
                  <span>{appointment.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-spa-green" />
                  <span className="truncate">{appointment.email}</span>
                </div>
                <div className="text-lg font-bold text-spa-green-dark">{appointment.price}</div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 hover:bg-spa-green hover:text-white">
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1 hover:bg-blue-500 hover:text-white">
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminAppointments;
