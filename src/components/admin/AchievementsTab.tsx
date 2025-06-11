
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Target, Calendar, TrendingUp } from "lucide-react";

export const AchievementsTab = () => {
  const achievements = [
    {
      id: "1",
      title: "Revenue Milestone",
      description: "Reached $50,000 in total revenue",
      icon: Trophy,
      date: "2024-03-15",
      category: "Financial",
      rarity: "Gold",
      points: 500
    },
    {
      id: "2",
      title: "Customer Champion",
      description: "Served 500+ satisfied customers",
      icon: Star,
      date: "2024-03-10",
      category: "Customer Service",
      rarity: "Silver",
      points: 300
    },
    {
      id: "3",
      title: "Perfect Month",
      description: "100% customer satisfaction for February",
      icon: Award,
      date: "2024-03-01",
      category: "Quality",
      rarity: "Gold",
      points: 400
    },
    {
      id: "4",
      title: "Growth Master",
      description: "25% month-over-month growth",
      icon: TrendingUp,
      date: "2024-02-28",
      category: "Growth",
      rarity: "Platinum",
      points: 750
    },
    {
      id: "5",
      title: "Booking Streak",
      description: "30 consecutive days of bookings",
      icon: Calendar,
      date: "2024-02-15",
      category: "Consistency",
      rarity: "Bronze",
      points: 200
    },
    {
      id: "6",
      title: "Team Builder",
      description: "Successfully onboarded 3 new therapists",
      icon: Target,
      date: "2024-02-10",
      category: "Team",
      rarity: "Silver",
      points: 350
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Platinum":
        return "bg-gray-800 text-white";
      case "Gold":
        return "bg-yellow-500 text-white";
      case "Silver":
        return "bg-gray-400 text-white";
      case "Bronze":
        return "bg-amber-600 text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Financial":
        return "bg-green-100 text-green-800";
      case "Customer Service":
        return "bg-blue-100 text-blue-800";
      case "Quality":
        return "bg-purple-100 text-purple-800";
      case "Growth":
        return "bg-orange-100 text-orange-800";
      case "Consistency":
        return "bg-teal-100 text-teal-800";
      case "Team":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Achievements & Milestones</h3>
          <p className="text-gray-600 mt-1">Celebrate your business successes and track progress</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{achievements.length}</div>
            <p className="text-sm text-gray-600">Total Achievements</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{totalPoints}</div>
            <p className="text-sm text-gray-600">Achievement Points</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
            <p className="text-sm text-gray-600">Gold Badges</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Level 8</div>
            <p className="text-sm text-gray-600">Business Level</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <Card key={achievement.id} className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.rarity === 'Platinum' ? 'bg-gray-800' :
                    achievement.rarity === 'Gold' ? 'bg-yellow-500' :
                    achievement.rarity === 'Silver' ? 'bg-gray-400' :
                    'bg-amber-600'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={getRarityColor(achievement.rarity)}>
                    {achievement.rarity}
                  </Badge>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(achievement.category)}>
                    {achievement.category}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-spa-green">
                      +{achievement.points} pts
                    </p>
                    <p className="text-xs text-gray-500">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-0 shadow-lg bg-gradient-to-r from-spa-blue/5 to-spa-teal/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Progress to Next Level
              </h4>
              <p className="text-gray-600">
                Earn 250 more points to reach Level 9
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-spa-green">2,500</p>
              <p className="text-sm text-gray-600">/ 2,750 points</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-spa-green to-spa-teal h-3 rounded-full transition-all duration-300"
                style={{ width: `${(2500 / 2750) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">91% complete</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
