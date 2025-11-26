/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic-dark': '#121212', // Darker, almost black
        'mystic-navy': '#1a1a1a', // Dark grey/brown for cards
        'mystic-text': '#e5e5e5', // Off-white/Beige
        'mystic-gold': '#d4af37', // Muted gold
        'mystic-muted': '#a0a0b0',
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
