const GOOGLE_CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const CALENDAR_ENDPOINT = "https://www.googleapis.com/calendar/v3/calendars";

const FALLBACK_EVENTS = [
  {
    id: "fallback-nov-29",
    title: "Nov 29 • Coven Sound Journey",
    description:
      "A liminal night of guided tea alchemy, psychic readings, and a sound bath led by our resident coven. Bring a journal and arrive 15 minutes early.",
    location: "The Wytch’s Brew Sanctuary",
    start: "2025-11-29T05:30:00+05:30",
    end: "2025-11-29T07:30:00+05:30",
    link: "#",
  },
];

const buildUrl = () => {
  const timeMin = new Date().toISOString();
  const params = new URLSearchParams({
    key: GOOGLE_API_KEY || "",
    timeMin,
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "50",
  });

  return `${CALENDAR_ENDPOINT}/${encodeURIComponent(GOOGLE_CALENDAR_ID || "")}/events?${params.toString()}`;
};

const normalizeEvents = (items = []) =>
  items.map((item) => ({
    id: item.id,
    title: item.summary || "Untitled Gathering",
    description: item.description || "",
    location: item.location || "The Wytch's Brew",
    start: item.start?.dateTime || item.start?.date,
    end: item.end?.dateTime || item.end?.date,
    link: item.htmlLink,
  }));

export async function getEvents() {
  if (!GOOGLE_CALENDAR_ID || !GOOGLE_API_KEY) {
    console.warn("Missing Google Calendar env vars; returning fallback events");
    return FALLBACK_EVENTS;
  }

  try {
    const response = await fetch(buildUrl());
    if (!response.ok) {
      throw new Error(`Google Calendar error: ${response.status}`);
    }
    const data = await response.json();

    const normalized = normalizeEvents(data.items);
    return normalized.length > 0 ? normalized : FALLBACK_EVENTS;
  } catch (error) {
    console.error("Failed to fetch Google Calendar events", error);
    return FALLBACK_EVENTS;
  }
}

