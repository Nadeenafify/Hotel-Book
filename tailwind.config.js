/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens:{
          xss:"380"
       },
       

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rtl": { direction: "rtl" },
        ".ltr": { direction: "ltr" },
      });
    },
  ],
};

