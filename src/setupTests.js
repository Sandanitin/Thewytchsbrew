// Mock environment variables
process.env.VITE_GOOGLE_CALENDAR_API_KEY = 'test-api-key';
process.env.VITE_GOOGLE_CALENDAR_ID = 'test-calendar-id';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});