
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Calendar, Phone, Mail, MapPin, Star } from "lucide-react";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock customers data
  const mockCustomers = [
    { 
      id: "1", 
      name: "John Doe", 
      email: "john@example.com", 
      phone: "+233 24 123 4567", 
      appointments: 8,
      totalSpent: "GHS 1,200",
      lastVisit: "2025-01-20",
      status: "VIP",
      rating: 5,
      address: "East Legon, Accra"
    },
    { 
      id: "2", 
      name: "Alice Johnson", 
      email: "alice@example.com", 
      phone: "+233 50 987 6543", 
      appointments: 4,
      totalSpent: "GHS 600",
      lastVisit: "2025-01-18",
      status: "Regular",
      rating: 4.5,
      address: "Osu, Accra"
    },
    { 
      id: "3", 
      name: "Robert Brown", 
      email: "robert@example.com", 
      phone: "+233 24 555 0123", 
      appointments: 2,
      totalSpent: "GHS 300",
      lastVisit: "2025-01-15",
      status: "New",
      rating: 4,
      address: "Tema, Greater Accra"
    }
  ];

  useEffect(() => {
    setCustomers(mockCustomers);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "VIP": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Regular": return "bg-green-100 text-green-800 border-green-200";
      case "New": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
            Customer Management
          </h1>
          <p className="text-muted-foreground">Manage customer relationships and history</p>
        </div>
        <Button className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, email, or phone..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{customers.length}</div>
            <div className="text-sm text-blue-700">Total Customers</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {customers.filter(c => c.status === "VIP").length}
            </div>
            <div className="text-sm text-purple-700">VIP Customers</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.status === "New").length}
            </div>
            <div className="text-sm text-green-700">New Customers</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-orange-600">4.5</div>
            <div className="text-sm text-orange-700">Avg Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-spa-green bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-spa-green transition-colors">
                  {customer.name}
                </CardTitle>
                <Badge className={`${getStatusColor(customer.status)} font-medium`}>
                  {customer.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-spa-green" />
                  <span className="truncate">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-spa-green" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-spa-green" />
                  <span className="truncate">{customer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-spa-green" />
                  <span>{customer.appointments} appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{customer.rating}/5 rating</span>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Total Spent:</span>
                  <span className="font-bold text-spa-green-dark">{customer.totalSpent}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Visit:</span>
                  <span className="text-sm">{customer.lastVisit}</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 hover:bg-spa-green hover:text-white">
                  View History
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

export default AdminCustomers;
