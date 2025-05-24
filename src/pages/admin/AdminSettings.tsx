
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/App";
import { AdminMobileHeader } from "@/components/admin/AdminMobileHeader";
import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  DollarSign
} from "lucide-react";

const AdminSettings = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactCount, setContactCount] = useState(0);

  // Settings states
  const [businessSettings, setBusinessSettings] = useState({
    name: "Hillary Massage Spa",
    description: "Premium wellness and relaxation services",
    address: "123 Wellness Street, Accra, Ghana",
    phone: "+233 24 123 4567",
    email: "info@hillarymassage.com",
    website: "www.hillarymassage.com",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed"
    }
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newAppointments: true,
    cancellations: true,
    reminders: true,
    marketing: false
  });

  const [systemSettings, setSystemSettings] = useState({
    autoConfirmBookings: false,
    allowOnlinePayments: true,
    requireDeposit: true,
    cancellationWindow: 24,
    bookingAdvanceLimit: 30
  });

  // Redirect if not logged in or not admin
  useEffect(() => {
    if (!isLoggedIn || (user && !user.isAdmin)) {
      navigate("/login");
    }
  }, [isLoggedIn, user, navigate]);

  // Load contact submissions count
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const unreadSubmissions = submissions.filter(sub => sub.status === "unread");
    setContactCount(unreadSubmissions.length);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSaveSettings = (section: string) => {
    // In a real app, this would save to a backend
    console.log(`Saving ${section} settings`);
    // You could save to localStorage or make an API call here
  };

  if (!isLoggedIn || !user || !user.isAdmin) {
    return null;
  }

  return (
    <>
      <AdminMobileHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <AdminDashboardLayout
        isMobileMenuOpen={isMobileMenuOpen}
        contactCount={contactCount}
        handleLogout={handleLogout}
      >
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-spa-green to-spa-green-dark bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-muted-foreground">Manage your business settings and preferences</p>
            </div>

            <Tabs defaultValue="business" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="business" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Business
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="system" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  System
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security
                </TabsTrigger>
              </TabsList>

              {/* Business Settings */}
              <TabsContent value="business">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-spa-green" />
                        Business Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          value={businessSettings.name}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={businessSettings.description}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, description: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={businessSettings.address}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, address: e.target.value }))}
                        />
                      </div>
                      <Button onClick={() => handleSaveSettings('business')} className="w-full">
                        Save Business Info
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-spa-green" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={businessSettings.phone}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={businessSettings.email}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={businessSettings.website}
                          onChange={(e) => setBusinessSettings(prev => ({ ...prev, website: e.target.value }))}
                        />
                      </div>
                      <Button onClick={() => handleSaveSettings('contact')} className="w-full">
                        Save Contact Info
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-spa-green" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(businessSettings.hours).map(([day, hours]) => (
                        <div key={day} className="space-y-2">
                          <Label htmlFor={day} className="capitalize">{day}</Label>
                          <Input
                            id={day}
                            value={hours}
                            onChange={(e) => setBusinessSettings(prev => ({
                              ...prev,
                              hours: { ...prev.hours, [day]: e.target.value }
                            }))}
                          />
                        </div>
                      ))}
                    </div>
                    <Button onClick={() => handleSaveSettings('hours')} className="mt-4">
                      Save Business Hours
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-spa-green" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(notificationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <Label htmlFor={key} className="capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {key === 'emailNotifications' && 'Receive notifications via email'}
                            {key === 'smsNotifications' && 'Receive notifications via SMS'}
                            {key === 'newAppointments' && 'Get notified of new bookings'}
                            {key === 'cancellations' && 'Get notified of cancellations'}
                            {key === 'reminders' && 'Send appointment reminders'}
                            {key === 'marketing' && 'Receive marketing communications'}
                          </p>
                        </div>
                        <Switch
                          id={key}
                          checked={value}
                          onCheckedChange={(checked) => 
                            setNotificationSettings(prev => ({ ...prev, [key]: checked }))
                          }
                        />
                      </div>
                    ))}
                    <Button onClick={() => handleSaveSettings('notifications')}>
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* System Settings */}
              <TabsContent value="system">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-spa-green" />
                      System Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Auto-confirm bookings</Label>
                            <p className="text-sm text-muted-foreground">
                              Automatically confirm new appointments
                            </p>
                          </div>
                          <Switch
                            checked={systemSettings.autoConfirmBookings}
                            onCheckedChange={(checked) => 
                              setSystemSettings(prev => ({ ...prev, autoConfirmBookings: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Allow online payments</Label>
                            <p className="text-sm text-muted-foreground">
                              Enable online payment processing
                            </p>
                          </div>
                          <Switch
                            checked={systemSettings.allowOnlinePayments}
                            onCheckedChange={(checked) => 
                              setSystemSettings(prev => ({ ...prev, allowOnlinePayments: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Require deposit</Label>
                            <p className="text-sm text-muted-foreground">
                              Require deposit for bookings
                            </p>
                          </div>
                          <Switch
                            checked={systemSettings.requireDeposit}
                            onCheckedChange={(checked) => 
                              setSystemSettings(prev => ({ ...prev, requireDeposit: checked }))
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cancellationWindow">Cancellation window (hours)</Label>
                          <Input
                            id="cancellationWindow"
                            type="number"
                            value={systemSettings.cancellationWindow}
                            onChange={(e) => setSystemSettings(prev => ({ 
                              ...prev, 
                              cancellationWindow: parseInt(e.target.value) 
                            }))}
                          />
                        </div>

                        <div>
                          <Label htmlFor="bookingAdvanceLimit">Booking advance limit (days)</Label>
                          <Input
                            id="bookingAdvanceLimit"
                            type="number"
                            value={systemSettings.bookingAdvanceLimit}
                            onChange={(e) => setSystemSettings(prev => ({ 
                              ...prev, 
                              bookingAdvanceLimit: parseInt(e.target.value) 
                            }))}
                          />
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleSaveSettings('system')}>
                      Save System Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-spa-green" />
                        Account Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button onClick={() => handleSaveSettings('password')} className="w-full">
                        Update Password
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-spa-green" />
                        Admin Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-spa-green to-spa-green-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                          <User className="h-10 w-10 text-white" />
                        </div>
                        <Badge variant="outline" className="bg-spa-green/10 text-spa-green">
                          Administrator
                        </Badge>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                      </div>
                      <div>
                        <Label>Role</Label>
                        <p className="text-sm text-muted-foreground">System Administrator</p>
                      </div>
                      <div>
                        <Label>Last Login</Label>
                        <p className="text-sm text-muted-foreground">Today at 2:30 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </AdminDashboardLayout>
    </>
  );
};

export default AdminSettings;
