
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <Card className="border border-spa-beige">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <h3 className="text-lg font-medium mb-4 text-spa-green-dark">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={{ before: new Date() }}
            className="rounded-md border border-spa-beige"
            classNames={{
              day_selected: "bg-spa-green text-white hover:bg-spa-green hover:text-white",
              day_today: "text-spa-green-dark font-medium",
              caption: "text-spa-green-dark",
              nav_button: "text-spa-green hover:bg-spa-cream",
              head_cell: "text-spa-green font-medium",
              cell: "text-gray-700",
            }}
          />
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card className="border border-spa-beige">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <h3 className="text-lg font-medium mb-4 text-spa-green-dark">Select Time</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Available times for {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
            </p>
            
            {availableTimeSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      selectedTime === time ? "bg-spa-green text-white border-spa-green" : "hover:bg-spa-cream border-spa-beige hover:text-spa-green-dark",
                      "transition-all duration-200 text-sm"
                    )}
                    onClick={() => onSelectTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No available time slots for this date.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingCalendar;
