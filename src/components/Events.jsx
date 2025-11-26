import React, { useEffect, useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { getEvents } from "../utils/googleCalendar";

const isDateOnly = (value = "") => /^\d{4}-\d{2}-\d{2}$/.test(value);

const parseEventDate = (value) => {
  if (!value) return new Date();
  if (typeof value === "string" && isDateOnly(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date(value);
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const googleEvents = await getEvents();
        const sortedEvents = (googleEvents || []).sort(
          (a, b) => parseEventDate(a.start) - parseEventDate(b.start)
        );
        setEvents(sortedEvents);
      } catch (err) {
        console.error("Failed to load events", err);
        setError("Could not load events at this time.");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
    const interval = setInterval(loadEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    const date = parseEventDate(dateString);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const formatTime = (dateString) => {
    if (!dateString) return "All Day";
    const hasTime = typeof dateString === "string" && dateString.includes("T");
    if (!hasTime) return "All Day";
    const date = parseEventDate(dateString);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <section className="py-20 bg-mystic-dark relative overflow-hidden" id="events">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-mystic-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mystic-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mystic-gold"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 bg-red-900/10 p-6 rounded-lg border border-red-900/20 max-w-md mx-auto">
            <p>{error}</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center text-mystic-muted py-12 bg-mystic-navy/30 rounded-xl border border-white/5 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em]">Calendar updating soon</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            <div className="lg:w-2/3">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10 shadow-2xl">
                <CalendarGrid events={events} />
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col h-[600px]">
              <h3 className="text-2xl font-serif text-mystic-text mb-4 pl-2 border-l-4 border-mystic-gold">
                Event Details
              </h3>

              <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {events.map((event) => {
                  const isPast = parseEventDate(event.end || event.start) < new Date();
                  return (
                    <div
                      key={event.id}
                      className={`group relative bg-mystic-navy/60 backdrop-blur-md border border-white/5 rounded-lg overflow-hidden hover:border-mystic-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-mystic-gold/5 ${
                        isPast ? "opacity-60 grayscale" : ""
                      }`}
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-mystic-gold font-serif text-sm tracking-wider bg-mystic-gold/10 px-2 py-1 rounded">
                            {formatDate(event.start)}
                          </span>
                          <span className="text-mystic-muted text-xs font-sans flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatTime(event.start)}
                          </span>
                        </div>

                        <h3 className="text-lg font-serif text-mystic-text mb-2 group-hover:text-mystic-gold transition-colors">
                          {event.title}
                        </h3>

                        {event.description && (
                          <p className="text-mystic-muted text-xs line-clamp-2 font-sans leading-relaxed mb-3">
                            {event.description}
                          </p>
                        )}

                        <div className="flex justify-between items-center pt-3 border-t border-white/5">
                          {event.location && (
                            <span className="text-xs text-mystic-muted flex items-center gap-1 truncate max-w-[60%]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="truncate">{event.location}</span>
                            </span>
                          )}

                          <a
                            href={event.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-mystic-gold uppercase tracking-widest hover:text-white transition-colors ml-auto flex items-center gap-1"
                          >
                            Details <span className="text-lg leading-none">&rsaquo;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <a
                  href={`https://calendar.google.com/calendar/embed?src=${import.meta.env.VITE_GOOGLE_CALENDAR_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mystic-gold text-sm hover:text-white transition-colors underline underline-offset-4 decoration-mystic-gold/30"
                >
                  View Full Google Calendar
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;