/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4DC7A2",
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
        banner_bottom:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1))",
        green_bg:
          "url('https://efishery.com/wp-content/uploads/2022/01/Subtract.png')",
        yellow_bg:
          "url('https://efishery.com/wp-content/uploads/2022/01/Subtract-3.png')",
        white_bg:
          "url('https://efishery.com/wp-content/uploads/2022/01/Subtract-7.png')",
      },
    },
  },
  plugins: [],
};
