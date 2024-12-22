/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'], // Add this to your font stack
      },
      colors: {
        primary: {
          DEFAULT: '#FF7477', // Light mode
          hover: '#E66466',
          dark: '#E25C5F', // Dark mode
          'dark-hover': '#C65053', // Dark mode hover
        },
        secondary: {
          DEFAULT: '#9CF6F6',
          hover: '#89E0E0',
          dark: '#7FD8D8', // Dark mode
          'dark-hover': '#6CC2C2', // Dark mode hover
        },
        background: {
          DEFAULT: '#B5D6D6',
          hover: '#A3C4C4',
          dark: '#1A2329', // Dark mode
          'dark-hover': '#10171B', // Dark mode hover
        },
        muted: {
          DEFAULT: '#CEB5B7',
          hover: '#B89E9F',
          dark: '#8B7577', // Dark mode
          'dark-hover': '#725D5F', // Dark mode hover
        },
        text: {
          DEFAULT: '#0A141B',
          hover: '#091219',
          dark: '#EAEAEA', // Dark mode
          'dark-hover': '#D6D6D6', // Dark mode hover
        },
      },
    }
  },
  plugins: [],
}