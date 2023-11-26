/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/src/assets/bg.jpg')",
        'action': "url('/src/assets/action.png')",
        'image': "url('src/assets/solar pannel.jpg')",
        'hero2' :" url('src/assets/images/Banner/Battery.jpg')",
        'hero1'  : "url('src/assets/images/Banner/solar.jpg')",
        'hero3': "url('src/assets/images/Banner/Tyer.jpg')",
        'hero4': "url('src/assets/images/Banner/Tyer Banner.jpg')",

      },
      colors: {
        bgColor: "#F7F6F6",
        bgColor2:'#02426B',
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

