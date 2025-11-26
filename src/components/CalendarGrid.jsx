import React, { useMemo } from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const isDateOnly = (value = "") => /^\d{4}-\d{2}-\d{2}$/.test(value);

const parseEventDate = (value) => {
  if (!value) return new Date();
  if (typeof value === "string" && isDateOnly(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date(value);
};

const normalizeDate = (value) => {
  const date = parseEventDate(value);
  date.setHours(0, 0, 0, 0);
  return date;
};

const sameDay = (a, b) => a.getTime() === b.getTime();

const CalendarGrid = ({ events = [] }) => {
  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const eventsMap = useMemo(() => {
    return events.reduce((map, event) => {
      if (!event?.start) return map;
      const key = normalizeDate(event.start).getTime();
      map[key] = map[key] ? [...map[key], event] : [event];
      return map;
    }, {});
  }, [events]);

  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDayOffset = firstDayOfMonth.getDay();
    const start = new Date(firstDayOfMonth);
    start.setDate(start.getDate() - startDayOffset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      const key = date.getTime();
      return {
        date,
        isToday: sameDay(date, today),
        isCurrentMonth: date.getMonth() === currentMonth,
        events: eventsMap[key] || [],
      };
    });
  }, [currentMonth, currentYear, today, eventsMap]);

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
            {calendarDays.map(({ date, isToday, isCurrentMonth, events }) => (
              <div
                key={date.toISOString()}
                className={`min-h-[60px] sm:min-h-[110px] rounded-lg border border-white/5 p-1 sm:p-2 flex flex-col gap-1 sm:gap-2 transition-colors ${isCurrentMonth ? "bg-white/3" : "bg-transparent opacity-50"
                  } ${isToday ? "ring-2 ring-mystic-gold/60" : ""}`}
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
                    const hasTime = typeof event.start === "string" && event.start.includes("T");
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
                              }).format(parseEventDate(event.start))
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;