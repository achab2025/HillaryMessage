
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format, addMonths } from "date-fns";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface BookingCalendarProps {
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
  availableTimeSlots: string[];
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  onSelectDate,
  onSelectTime,
  selectedDate,
  selectedTime,
  availableTimeSlots
}) => {
  const [month, setMonth] = useState<Date>(new Date());
  
  // Group time slots into morning, afternoon, evening
  const groupedTimeSlots = {
    morning: availableTimeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour >= 7 && hour < 12;
    }),
    afternoon: availableTimeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour >= 12 && hour < 17;
    }),
    evening: availableTimeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour >= 17;
    })
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="border border-violet-100 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 text-violet-800">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={{ before: new Date() }}
            month={month}
            onMonthChange={setMonth}
            className="rounded-md border border-violet-100"
            classNames={{
              day_selected: "bg-violet-600 text-white hover:bg-violet-600 hover:text-white",
              day_today: "text-violet-800 font-medium",
              caption: "text-violet-800",
              nav_button: "text-violet-600 hover:bg-violet-100",
              head_cell: "text-violet-600 font-medium",
              cell: "text-gray-700",
            }}
          />
          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>Available today ✓</span>
            <span>Unavailable ✗</span>
          </div>
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card className="border border-violet-100 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4 text-violet-800">Select Time</h3>
            <p className="text-muted-foreground mb-4">
              {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
            </p>
            
            {availableTimeSlots.length > 0 ? (
              <div className="space-y-4">
                {groupedTimeSlots.morning.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center text-violet-700">
                      <Clock className="mr-1 h-4 w-4" />
                      Morning
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {groupedTimeSlots.morning.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            selectedTime === time ? "bg-violet-600 text-white border-violet-600" : "hover:bg-violet-50 border-violet-200",
                            "transition-all duration-200"
                          )}
                          onClick={() => onSelectTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {groupedTimeSlots.afternoon.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center text-violet-700">
                      <Clock className="mr-1 h-4 w-4" />
                      Afternoon
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {groupedTimeSlots.afternoon.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            selectedTime === time ? "bg-violet-600 text-white border-violet-600" : "hover:bg-violet-50 border-violet-200",
                            "transition-all duration-200"
                          )}
                          onClick={() => onSelectTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {groupedTimeSlots.evening.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center text-violet-700">
                      <Clock className="mr-1 h-4 w-4" />
                      Evening
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {groupedTimeSlots.evening.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            selectedTime === time ? "bg-violet-600 text-white border-violet-600" : "hover:bg-violet-50 border-violet-200",
                            "transition-all duration-200"
                          )}
                          onClick={() => onSelectTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                <Clock className="h-10 w-10 mx-auto mb-3 text-violet-200" />
                <p>No available time slots for this date.</p>
                <p className="text-sm mt-2">Please select another date.</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingCalendar;
