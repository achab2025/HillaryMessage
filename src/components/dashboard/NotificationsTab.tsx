
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Gift, Award } from "lucide-react";

interface NotificationsTabProps {
  notifications: any[];
}

export const NotificationsTab = ({ notifications }: NotificationsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
        <Button variant="outline" size="sm">Mark All Read</Button>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === 'reminder' ? 'bg-spa-blue/20 text-spa-blue' :
                  notification.type === 'offer' ? 'bg-spa-green/20 text-spa-green' :
                  'bg-spa-teal/20 text-spa-teal'
                }`}>
                  {notification.type === 'reminder' && <Clock size={16} />}
                  {notification.type === 'offer' && <Gift size={16} />}
                  {notification.type === 'achievement' && <Award size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{notification.message}</p>
                  <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
