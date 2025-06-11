
import { useContext } from "react";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Mail, Shield } from "lucide-react";

export const ProfileTab = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Profile & Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-muted-foreground" />
                <span>123 Wellness St, Spa City, SC 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-muted-foreground" />
                <span>{user?.email}</span>
              </div>
            </div>
            <Button className="w-full mt-4">Edit Profile</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Email Notifications</span>
                <div className="w-10 h-6 bg-spa-blue rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SMS Reminders</span>
                <div className="w-10 h-6 bg-spa-blue rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Marketing Communications</span>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Shield size={16} className="mr-2" />
              Privacy Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
