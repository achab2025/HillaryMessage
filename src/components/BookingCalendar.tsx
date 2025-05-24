
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <Card className="border border-spa-beige group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-spa-green/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-spa-green/5 to-spa-green-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="relative z-10 pb-4">
          <CardTitle className="flex items-center text-xl font-semibold text-spa-green-dark">
            <CalendarDays className="h-5 w-5 mr-3 text-spa-green" />
            Select Date
            <Sparkles className="h-4 w-4 ml-auto text-spa-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 relative z-10">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={{ before: new Date() }}
              className="rounded-lg border border-spa-beige/50 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              classNames={{
                months: "flex w-full",
                month: "space-y-4 w-full",
                caption: "flex justify-center pt-1 relative items-center text-spa-green-dark font-semibold text-lg mb-4",
                caption_label: "text-lg font-semibold",
                nav: "space-x-1 flex items-center",
                nav_button: "h-8 w-8 bg-spa-cream hover:bg-spa-green hover:text-white transition-colors duration-200 rounded-md border border-spa-beige",
                nav_button_previous: "absolute left-2",
                nav_button_next: "absolute right-2",
                table: "w-full border-collapse",
                head_row: "flex w-full mb-2",
                head_cell: "text-spa-green font-semibold w-full text-center py-2 text-sm",
                row: "flex w-full mt-1",
                cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 w-full",
                day: cn(
                  "h-10 w-10 p-0 font-medium rounded-lg transition-all duration-200 hover:bg-spa-cream hover:text-spa-green-dark hover:scale-105 mx-auto",
                  "aria-selected:opacity-100"
                ),
                day_range_end: "day-range-end",
                day_selected: "bg-spa-green text-white hover:bg-spa-green-dark hover:text-white shadow-lg transform scale-110",
                day_today: "text-spa-green-dark font-bold bg-spa-cream/70 border border-spa-green/30",
                day_outside: "text-muted-foreground opacity-40 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
          </div>
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card className="border border-spa-beige group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-spa-green/50 relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-green/5 to-spa-green-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative z-10 pb-4">
            <CardTitle className="flex items-center text-xl font-semibold text-spa-green-dark">
              <Clock className="h-5 w-5 mr-3 text-spa-green" />
              Select Time
              <Sparkles className="h-4 w-4 ml-auto text-spa-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300">
              Available times for {selectedDate ? format(selectedDate, "EEEE, MMMM do, yyyy") : ""}
            </p>
          </CardHeader>
          <CardContent className="p-4 relative z-10">
            {availableTimeSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      "transition-all duration-300 text-sm font-medium relative overflow-hidden h-12",
                      selectedTime === time 
                        ? "bg-spa-green text-white border-spa-green shadow-lg shadow-spa-green/30 scale-105 hover:bg-spa-green-dark" 
                        : "hover:bg-spa-green hover:text-white border-spa-beige hover:border-spa-green hover:shadow-lg hover:scale-105 hover:-translate-y-1 text-spa-green-dark"
                    )}
                    onClick={() => onSelectTime(time)}
                  >
                    <span className="relative z-10 font-semibold">{time}</span>
                    {selectedTime !== time && (
                      <div className="absolute inset-0 bg-gradient-to-r from-spa-green/0 via-spa-green/10 to-spa-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
