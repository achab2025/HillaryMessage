
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Gift, CreditCard, Bookmark } from "lucide-react";

export const MembershipTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Membership & Rewards</h2>
      
      <Card className="border-0 shadow-lg bg-gradient-to-r from-spa-blue/5 to-spa-teal/10">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Membership</h3>
              <p className="text-muted-foreground mb-4">Active since March 2024</p>
              <div className="flex items-center gap-4">
                <Badge className="bg-spa-green text-white">20% Off All Services</Badge>
                <Badge className="bg-spa-blue text-white">Priority Booking</Badge>
                <Badge className="bg-spa-teal text-white">Exclusive Access</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="w-20 h-20 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-spa-green" />
              Rewards Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-spa-green mb-2">2,450</div>
              <p className="text-sm text-muted-foreground">Available Points</p>
              <Button variant="outline" className="mt-4 w-full">
                Redeem Points
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-spa-blue" />
              Saved Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                  VISA
                </div>
                <span className="text-sm">•••• 4242</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Manage Payment Methods
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bookmark className="h-5 w-5 text-spa-teal" />
              Referrals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-spa-teal mb-2">3</div>
              <p className="text-sm text-muted-foreground mb-4">Friends Referred</p>
              <Button variant="outline" size="sm" className="w-full">
                Invite Friends
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
