/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: 
    {
      fontFamily:{blink: ['Blinker', 'sans-serif'],} 
    },
    extend: 
    {
      maxHeight: {
        '144': '36rem',
      }
       
    },
    extend: 
    {
      maxWidth: {
        '96': '24rem',
      }
    },

    

  },
  plugins: [],
}
