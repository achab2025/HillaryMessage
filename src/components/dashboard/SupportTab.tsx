
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

export const SupportTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Help & Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-12 w-12 text-spa-blue mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-muted-foreground text-sm mb-4">Get instant help from our support team</p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 text-spa-green mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Support</h3>
            <p className="text-muted-foreground text-sm mb-4">Speak directly with our team</p>
            <Button variant="outline" className="w-full">Call Now</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Mail className="h-12 w-12 text-spa-teal mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-muted-foreground text-sm mb-4">Send us your questions via email</p>
            <Button variant="outline" className="w-full">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <HelpCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
            <p className="text-muted-foreground text-sm mb-4">Find answers to common questions</p>
            <Button variant="outline" className="w-full">View FAQ</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="ghost" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Booking Guidelines</div>
                <div className="text-sm text-muted-foreground">Learn about our booking policies</div>
              </div>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Cancellation Policy</div>
                <div className="text-sm text-muted-foreground">Understand our cancellation terms</div>
              </div>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Service Information</div>
                <div className="text-sm text-muted-foreground">Details about our treatments</div>
              </div>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Account Management</div>
                <div className="text-sm text-muted-foreground">Manage your account settings</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
