/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { right: '-100vh' },
          '100%': { right: '0px' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}

