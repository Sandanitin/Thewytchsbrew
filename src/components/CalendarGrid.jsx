import React, { useMemo } from "react";
import { useBooking } from "../context/BookingContext";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Extract date parts from ISO string to avoid timezone conversion issues
// This extracts YYYY-MM-DD from strings like "2025-12-29T18:00:00-05:00" (USA timezone)
const extractDateParts = (dateString) => {
  if (!dateString) return null;
  // Handle both dateTime and date-only formats
  const datePart = dateString.split('T')[0]; // Gets "2025-12-29"
  const [year, month, day] = datePart.split('-').map(Number);
  return { year, month: month - 1, day }; // month is 0-indexed
};

// Compare a local Date object with an event's date string
// This avoids timezone conversion by extracting the date directly from the string
const isSameDateAsEvent = (localDate, eventDateString) => {
  const eventParts = extractDateParts(eventDateString);
  if (!eventParts) return false;

  return localDate.getFullYear() === eventParts.year &&
    localDate.getMonth() === eventParts.month &&
    localDate.getDate() === eventParts.day;
};

// Compare two local Date objects (for isToday comparison)
const isSameDate = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
};

const CalendarGrid = ({ events = [] }) => {
  const { openBookingModal, openCustomBookingModal } = useBooking();

  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const handleDayClick = (clickedDate, dayEvents) => {
    console.log("Day clicked:", clickedDate, "Events:", dayEvents);

    // If there are events on this day, open booking for the first event
    if (dayEvents.length > 0) {
      console.log("Opening booking modal for event:", dayEvents[0]);
      openBookingModal(dayEvents[0]);
    }
    // If no events, we could show a different modal or create a custom event
    else {
      console.log("Clicked on empty day:", clickedDate);
      // For now, we'll just log it. You might want to show a different modal
      // for booking a custom session on this date
      openCustomBookingModal(clickedDate);
    }
  };

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDayOffset = firstDayOfMonth.getDay();
    const start = new Date(firstDayOfMonth);
    start.setDate(start.getDate() - startDayOffset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);

      // Find events for this specific date - use string-based comparison to avoid timezone issues
      const dayEvents = events.filter(event => {
        if (!event?.start) return false;
        try {
          // Use isSameDateAsEvent to compare directly with the event's date string
          // This extracts YYYY-MM-DD from the event and compares without timezone conversion
          return isSameDateAsEvent(date, event.start);
        } catch (e) {
          console.error("Error parsing event date:", event.start, e);
          return false;
        }
      });

      return {
        date,
        isToday: isSameDate(date, today),
        isCurrentMonth: date.getMonth() === currentMonth,
        events: dayEvents,
      };
    });
  }, [currentMonth, currentYear, today, events]);

  const monthHeading = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(currentYear, currentMonth, 1));

  return (
    <div className="rounded-xl bg-mystic-navy/50 border border-white/5 text-mystic-text">
      <div className="flex flex-col gap-2 px-4 sm:px-6 pt-6 pb-4 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-mystic-muted">
              Ritual Calendar
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif text-mystic-gold truncate max-w-[180px] sm:max-w-xs">
              {monthHeading}
            </h3>
          </div>
          <div className="text-xs text-mystic-muted text-right max-w-[120px] sm:max-w-xs hidden sm:block">
            Sessions shift with the stars. Keep an eye on the dates with sigils —
            they mark psychic readings, sound healings, circles, and surprise shows.
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        {/* Removed fixed min-width to allow responsive behavior */}
        <div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 px-2 sm:px-6 pt-4 pb-2 text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-mystic-muted">
            {weekdays.map((day) => (
              <div key={day} className="text-center p-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 px-2 sm:px-6 pb-6">
            {calendarDays.map(({ date, isToday, isCurrentMonth, events }) => {
              return (
                <div
                  key={date.toISOString()}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDayClick(date, events);
                  }}
                  className={`min-h-[60px] sm:min-h-[110px] rounded-lg border border-white/5 p-1 sm:p-2 flex flex-col gap-1 sm:gap-2 transition-colors cursor-pointer hover:bg-white/10 ${isCurrentMonth ? "bg-white/3" : "bg-transparent opacity-50"
                    } ${isToday ? "ring-2 ring-mystic-gold/60" : ""} ${
                    // Make all days clickable, not just days with events
                    "hover:border-mystic-gold/50"
                    }`}
                >
                  <div className="flex items-center justify-between text-[0.7rem] sm:text-xs">
                    <span className="font-serif">{date.getDate()}</span>
                    {events.length > 0 && (
                      <span className="text-[0.5rem] sm:text-[0.6rem] text-mystic-gold uppercase tracking-widest">
                        {events.length} {events.length === 1 ? "event" : "events"}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2 overflow-hidden">
                    {events.slice(0, 1).map((event) => {
                      // Check if the event has a time component
                      const hasTime = event.start && event.start.includes("T") && !event.start.match(/^\d{4}-\d{2}-\d{2}$/);
                      return (
                        <div
                          key={event.id}
                          className="bg-mystic-purple/20 border border-mystic-purple/30 rounded-md px-1 py-1 sm:px-2 sm:py-1"
                        >
                          <p className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-mystic-gold line-clamp-1">
                            {event.title}
                          </p>
                          {event.start && (
                            <p className="text-[0.5rem] sm:text-[0.6rem] text-mystic-muted">
                              {hasTime
                                ? new Intl.DateTimeFormat("en-US", {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                }).format(new Date(event.start))
                                : "All Day"}
                            </p>
                          )}
                        </div>
                      );
                    })}
                    {events.length > 1 && (
                      <p className="text-[0.55rem] sm:text-[0.65rem] text-mystic-muted">
                        +{events.length - 1} more
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;