
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Reply, Flag, ThumbsUp } from "lucide-react";

export const ReviewsTab = () => {
  const reviews = [
    {
      id: "1",
      customer: "Emily Johnson",
      service: "Deep Tissue Massage",
      rating: 5,
      date: "2024-03-15",
      comment: "Absolutely amazing experience! Jane is incredibly skilled and the atmosphere was so relaxing. Will definitely be back!",
      therapist: "Jane Smith",
      status: "Published",
      helpful: 12
    },
    {
      id: "2",
      customer: "David Chen",
      service: "Swedish Massage",
      rating: 5,
      date: "2024-03-14",
      comment: "Perfect massage! Michael knew exactly how to work out all the tension in my shoulders. Highly recommend!",
      therapist: "Michael Johnson",
      status: "Published",
      helpful: 8
    },
    {
      id: "3",
      customer: "Sarah Wilson",
      service: "Hot Stone Therapy",
      rating: 4,
      date: "2024-03-13",
      comment: "Great service overall. The hot stones were very relaxing. Only minor issue was the room was a bit cold initially.",
      therapist: "Sarah Williams",
      status: "Pending",
      helpful: 3
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
          <p className="text-gray-600 mt-1">Manage and respond to customer feedback</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Reviews</Button>
          <Button className="bg-spa-green hover:bg-spa-green-dark">View All Reviews</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-sm text-gray-600">Average Rating</p>
            <p className="text-xs text-green-600">Based on 247 reviews</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
            <p className="text-sm text-gray-600">New Reviews</p>
            <p className="text-xs text-blue-600">This month</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-sm text-gray-600">Response Rate</p>
            <p className="text-xs text-green-600">Within 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-blue to-spa-teal rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {review.customer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.customer}</h4>
                    <p className="text-sm text-gray-600">{review.service} • {review.therapist}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`${
                    review.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {review.status}
                  </Badge>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{review.comment}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.helpful} found this helpful</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Reply className="w-4 h-4 mr-1" />
                    Reply
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="w-4 h-4 mr-1" />
                    Flag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
