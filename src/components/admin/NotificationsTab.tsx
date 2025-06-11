
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Send, Users, Calendar, DollarSign } from "lucide-react";

export const NotificationsTab = () => {
  const notifications = [
    {
      id: "1",
      type: "appointment",
      title: "New Appointment Booked",
      message: "John Doe booked a Deep Tissue Massage for tomorrow at 2:00 PM",
      time: "5 minutes ago",
      read: false,
      priority: "high"
    },
    {
      id: "2",
      type: "payment",
      title: "Payment Received",
      message: "Payment of $120 received from Emily Johnson for Swedish Massage",
      time: "1 hour ago",
      read: false,
      priority: "medium"
    },
    {
      id: "3",
      type: "review",
      title: "New Review Posted",
      message: "Sarah Wilson left a 5-star review for Hot Stone Therapy",
      time: "2 hours ago",
      read: true,
      priority: "low"
    },
    {
      id: "4",
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur tonight from 2-4 AM",
      time: "1 day ago",
      read: true,
      priority: "medium"
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="w-5 h-5" />;
      case "payment":
        return <DollarSign className="w-5 h-5" />;
      case "review":
        return <Users className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Notifications Center</h3>
          <p className="text-gray-600 mt-1">Stay updated with real-time alerts and messages</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button className="bg-spa-green hover:bg-spa-green-dark">
            <Send className="w-4 h-4 mr-2" />
            Send Notification
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
            <p className="text-sm text-gray-600">Unread</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <p className="text-sm text-gray-600">Today</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">48</div>
            <p className="text-sm text-gray-600">Sent</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <p className="text-sm text-gray-600">Recipients</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`border-0 shadow-lg transition-all hover:shadow-xl ${
              !notification.read ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  notification.type === 'appointment' ? 'bg-blue-100 text-blue-600' :
                  notification.type === 'payment' ? 'bg-green-100 text-green-600' :
                  notification.type === 'review' ? 'bg-purple-100 text-purple-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {getIconForType(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(notification.priority)}>
                        {notification.priority}
                      </Badge>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load More Notifications</Button>
      </div>
    </div>
  );
};
