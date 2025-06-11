
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, TrendingUp, Star } from "lucide-react";

interface WellnessTabProps {
  wellnessData: any;
}

export const WellnessTab = ({ wellnessData }: WellnessTabProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Wellness Tracking</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Stress Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{wellnessData.stressLevel}%</div>
                <Progress value={wellnessData.stressLevel} className="h-3" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Based on your recent activities and feedback
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-spa-green" />
              Wellness Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{wellnessData.wellnessScore}/10</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Excellent progress this month!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Favorite Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-spa-blue" />
              </div>
              <h3 className="font-semibold text-gray-900">{wellnessData.favoriteService}</h3>
              <p className="text-sm text-muted-foreground">Your most booked service</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Monthly Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Relaxation Hours</span>
                <span className="text-2xl font-bold text-spa-blue">{wellnessData.relaxationHours}/{wellnessData.monthlyGoal}</span>
              </div>
              <Progress value={(wellnessData.relaxationHours / wellnessData.monthlyGoal) * 100} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {wellnessData.monthlyGoal - wellnessData.relaxationHours} hours to reach your goal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
