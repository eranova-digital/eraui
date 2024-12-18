/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.tsx",
  ],
  safelist: [
    // Add common text sizes you will use dynamically
    "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl",
    "mt-0", "mt-0.5", "mt-1", "mt-1.5", "mt-2", "mt-3", "mt-4"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#b3c5ff',
          100: '#809fff',
          200: '#4d79ff',
          300: '#3365ff',
          500: '#003fff',
          600: '#0032cc',
          700: '#002699',
          800: '#001966',
          900: '#000d33'
        }
      }
    },
  },
  plugins: [],
}
