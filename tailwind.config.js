/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      /* 🔄 RIGHT BADGE ICON CYCLING */
      keyframes: {
        iconCycle: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '33%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '66%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },

      animation: {
        icon1: 'iconCycle 3s infinite',
        icon2: 'iconCycle 3s infinite 1s',
        icon3: 'iconCycle 3s infinite 2s',
      },

    },
  },

  plugins: [],
};