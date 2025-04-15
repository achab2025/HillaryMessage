
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="border border-violet-100">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 text-violet-800">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={{ before: new Date() }}
            className="rounded-md border border-violet-100"
            styles={{
              head_cell: { 
                width: "100%",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#7c3aed",
              },
              cell: {
                width: "100%",
                fontSize: "0.875rem",
                color: "#1f2937",
              },
              day: {
                margin: "0 auto",
                width: "36px",
                height: "36px",
                fontSize: "0.875rem",
              },
              day_selected: {
                backgroundColor: "#8b5cf6",
                color: "white",
              },
              day_today: {
                color: "#7c3aed",
                fontWeight: 500,
              },
              nav_button: {
                color: "#7c3aed",
              },
              caption: {
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
              },
            }}
          />
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card className="border border-violet-100">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4 text-violet-800">Select Time</h3>
            <p className="text-muted-foreground mb-4">
              Available times for {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
            </p>
            
            {availableTimeSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimeSlots.map((time) => (
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
