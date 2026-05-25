/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
        background: '#f8fafc',
        darkBackground: '#0f172a',
        text: '#1e293b',
        darkText: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
