
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, Key, Users, Settings } from "lucide-react";

export const SecurityTab = () => {
  const securityLogs = [
    {
      id: "1",
      action: "Login Attempt",
      user: "admin@hillary-massage.com",
      timestamp: "2024-03-15 14:30:22",
      status: "Success",
      ip: "192.168.1.100",
      location: "New York, NY"
    },
    {
      id: "2",
      action: "Password Change",
      user: "admin@hillary-massage.com",
      timestamp: "2024-03-15 09:15:10",
      status: "Success",
      ip: "192.168.1.100",
      location: "New York, NY"
    },
    {
      id: "3",
      action: "Failed Login",
      user: "unknown@example.com",
      timestamp: "2024-03-14 23:45:33",
      status: "Failed",
      ip: "45.123.67.89",
      location: "Unknown"
    },
    {
      id: "4",
      action: "Data Export",
      user: "admin@hillary-massage.com",
      timestamp: "2024-03-14 16:20:15",
      status: "Success",
      ip: "192.168.1.100",
      location: "New York, NY"
    }
  ];

  const permissions = [
    {
      role: "Administrator",
      users: 1,
      permissions: ["Full Access", "User Management", "Data Export", "System Settings"]
    },
    {
      role: "Manager",
      users: 2,
      permissions: ["View Reports", "Manage Appointments", "Customer Data", "Staff Schedules"]
    },
    {
      role: "Therapist",
      users: 3,
      permissions: ["View Schedule", "Update Appointments", "Customer Notes"]
    },
    {
      role: "Receptionist",
      users: 2,
      permissions: ["Booking Management", "Customer Check-in", "Basic Reports"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Warning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Security & Access Control</h3>
          <p className="text-gray-600 mt-1">Monitor system security and manage user permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Security Settings
          </Button>
          <Button className="bg-spa-green hover:bg-spa-green-dark">
            <Shield className="w-4 h-4 mr-2" />
            Run Security Scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Secure</div>
            <p className="text-sm text-gray-600">System Status</p>
            <p className="text-xs text-green-600">Last scan: 2 hours ago</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <p className="text-sm text-gray-600">Active Users</p>
            <p className="text-xs text-blue-600">4 roles configured</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
            <p className="text-sm text-gray-600">Security Alerts</p>
            <p className="text-xs text-yellow-600">Past 24 hours</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Key className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <p className="text-sm text-gray-600">Login Attempts</p>
            <p className="text-xs text-purple-600">Today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Security Activity Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{log.action}</span>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{log.user}</p>
                    <p className="text-xs text-gray-500">{log.timestamp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{log.ip}</p>
                    <p className="text-xs text-gray-500">{log.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Full Log
            </Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Role Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {permissions.map((role, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{role.role}</h4>
                    <Badge variant="outline">
                      {role.users} user{role.users !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission, permIndex) => (
                      <Badge key={permIndex} className="bg-spa-green/10 text-spa-green text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Manage Permissions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
