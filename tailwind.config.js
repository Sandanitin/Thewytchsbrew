/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic-dark': '#0a0a09', // Warm black
        'mystic-navy': '#141512', // Deep umber/charcoal
        'mystic-text': '#f4f4f0', // Warm cream
        'mystic-gold': '#c5a059', // Antique gold
        'mystic-muted': '#8e8e8e',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(to bottom, #121212, #1a1a1a)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
