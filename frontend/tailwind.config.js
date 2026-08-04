/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#e1ebf4',
          200: '#c8dbe9',
          300: '#a3c4db',
          400: '#78a6cb',
          500: '#578bb6',
          600: '#416f98',
          700: '#35597b',
          800: '#2e4b66',
          900: '#002147',
          950: '#00132b',
        },
        saffron: {
          DEFAULT: '#FF9933',
        },
        indiaGreen: {
          DEFAULT: '#138808',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
