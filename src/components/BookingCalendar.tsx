
import React, { useState } from "react";
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
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={{ before: new Date() }}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Select Time</h3>
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
                      selectedTime === time ? "bg-spa-blue text-white" : "hover:bg-spa-blue/10"
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
