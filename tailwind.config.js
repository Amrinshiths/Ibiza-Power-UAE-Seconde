/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/src/assets/bg.jpg')",
        'action': "url('/src/assets/action.png')",
        'image': "url('src/assets/solar panel.jpg')"
      },
      colors: {
        bgColor: "#F7F6F6",
        headingColor: "#051965",
        headingColor2: "#232234",
        textColor: "#827791",
      },
      fontFamily: {
        sans: ['Poppins'],
    },
    },
  },
  plugins: [],
}

