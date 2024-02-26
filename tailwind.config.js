/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        550: '550px',
        800: '800px',
        950: '950px',
      },
      width:{
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
      },

    },
  },
  plugins: [],
}