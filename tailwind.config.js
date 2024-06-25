/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: {
          orange: 'hsl(35, 77%, 62%)',
          red: 'hsl(5, 85%, 63%)',
        },
        secondary: {
          offWhite: 'hsl(36, 100%, 99%)',
          grayishBlue: 'hsl(233, 8%, 79%)',
          darkGrayishBlue: 'hsl(236, 13%, 42%)',
          veryDarkBlue: 'hsl(240, 100%, 5%)',
        }
      },
      fontFamily: {
        primary: ['Inter']
      }
    },
  },
  plugins: [],
}

