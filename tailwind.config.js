/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#C87533',
        'accent-hover': '#A85E28',
        'accent-light': '#D4956A',
        surface: {
          DEFAULT: '#0A0A0A',
          elevated: '#111111',
          card: '#141414',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', fontWeight: '400', letterSpacing: '-0.04em' }],
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '400', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '400', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
