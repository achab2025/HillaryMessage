
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Save, User, Mail, Phone, MapPin } from "lucide-react";

export const SettingsTab = () => {
  return (
    <div className="space-y-6">
      {/* Business Information */}
      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg p-6 border border-spa-green/10">
        <h3 className="text-xl font-semibold text-spa-green mb-6 flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Business Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="business-name" className="text-sm font-medium text-gray-700">Business Name</Label>
              <Input 
                id="business-name" 
                defaultValue="Hillary Massage" 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <Input 
                id="email" 
                type="email" 
                defaultValue="contact@hillarymassage.com" 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
              <Input 
                id="phone" 
                defaultValue="+1 (555) 123-4567" 
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
              <Textarea 
                id="address" 
                defaultValue="123 Wellness Street, Relaxation City, RC 12345" 
                className="mt-1"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">Business Description</Label>
              <Textarea 
                id="description" 
                defaultValue="Professional massage therapy services focused on relaxation and wellness." 
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green transition-all duration-300">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Appointment Settings */}
      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg p-6 border border-spa-green/10">
        <h3 className="text-xl font-semibold text-spa-green mb-6">Appointment Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="booking-window" className="text-sm font-medium text-gray-700">Booking Window (days ahead)</Label>
              <Input 
                id="booking-window" 
                type="number" 
                defaultValue="30" 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="cancellation-policy" className="text-sm font-medium text-gray-700">Cancellation Policy (hours before)</Label>
              <Input 
                id="cancellation-policy" 
                type="number" 
                defaultValue="24" 
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="default-duration" className="text-sm font-medium text-gray-700">Default Appointment Duration (minutes)</Label>
              <Input 
                id="default-duration" 
                type="number" 
                defaultValue="60" 
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="buffer-time" className="text-sm font-medium text-gray-700">Buffer Time Between Appointments (minutes)</Label>
              <Input 
                id="buffer-time" 
                type="number" 
                defaultValue="15" 
                className="mt-1"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button className="bg-gradient-to-r from-spa-green to-spa-green-dark hover:from-spa-green-dark hover:to-spa-green transition-all duration-300">
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg p-6 border border-spa-green/10">
        <h3 className="text-xl font-semibold text-spa-green mb-6">Notification Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-spa-green/5 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive email notifications for new bookings</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-spa-green/5 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">SMS Notifications</h4>
              <p className="text-sm text-gray-600">Receive SMS notifications for urgent updates</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-spa-green/5 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Reminder Settings</h4>
              <p className="text-sm text-gray-600">Automatic client appointment reminders</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
