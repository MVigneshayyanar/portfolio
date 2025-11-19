/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#000000',
        'secondary': '#ff6347',
        'tertiary': '#d8bfd8',
        'text-light': '#ffffff',
        'text-muted': '#bbbbbb',
        'card-bg': '#111111',
        // Light mode colors
        'light-primary': '#ff6347',
        'light-secondary': '#000000',
        'light-tertiary': '#4a90e2',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
