
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock, Sparkles } from "lucide-react";

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
      <Card className="border border-spa-beige group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-spa-green/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-spa-green/5 to-spa-green-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
          <div className="flex items-center mb-4">
            <CalendarDays className="h-5 w-5 mr-2 text-spa-green group-hover:animate-pulse" />
            <h3 className="text-lg font-medium text-spa-green-dark group-hover:text-spa-green transition-colors duration-300">
              Select Date
            </h3>
            <Sparkles className="h-4 w-4 ml-auto text-spa-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={{ before: new Date() }}
            className="rounded-md border border-spa-beige group-hover:border-spa-green/30 transition-colors duration-300"
            classNames={{
              day_selected: "bg-spa-green text-white hover:bg-spa-green hover:text-white shadow-lg",
              day_today: "text-spa-green-dark font-medium bg-spa-cream/50",
              caption: "text-spa-green-dark font-semibold",
              nav_button: "text-spa-green hover:bg-spa-cream transition-colors duration-200",
              head_cell: "text-spa-green font-medium",
              cell: "text-gray-700 hover:bg-spa-cream/30 transition-colors duration-200",
              day: "hover:scale-105 transition-transform duration-200",
            }}
          />
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card className="border border-spa-beige group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-spa-green/50 relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-green/5 to-spa-green-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-spa-green group-hover:animate-spin" />
              <h3 className="text-lg font-medium text-spa-green-dark group-hover:text-spa-green transition-colors duration-300">
                Select Time
              </h3>
              <Sparkles className="h-4 w-4 ml-auto text-spa-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-muted-foreground mb-4 text-sm group-hover:text-gray-700 transition-colors duration-300">
              Available times for {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
            </p>
            
            {availableTimeSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      "transition-all duration-300 text-sm font-medium relative overflow-hidden group/btn",
                      selectedTime === time 
                        ? "bg-spa-green text-white border-spa-green shadow-lg shadow-spa-green/30 scale-105" 
                        : "hover:bg-spa-green hover:text-white border-spa-beige hover:border-spa-green hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
                    )}
                    onClick={() => onSelectTime(time)}
                  >
                    <span className="relative z-10">{time}</span>
                    {selectedTime !== time && (
                      <div className="absolute inset-0 bg-gradient-to-r from-spa-green/0 via-spa-green/10 to-spa-green/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    )}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto text-spa-green/30 mb-3" />
                <p className="text-center text-muted-foreground">
                  No available time slots for this date.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingCalendar;
