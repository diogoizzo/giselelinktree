// const colors = require('tailwindcss/colors')

module.exports = {
   content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
   theme: {
      extend: {
         colors: {
            bordoLight: "#faf3f2",
            bordoSuave: "#f7eae9",
            bordoLightMedium: "#F4E4E2",
            bordoMedium: "#edcdc8",
            bordoMediumDark: "#E4BCB4",
            bordoDark: "#4f1f1d",
         },
         fontFamily: {
            dmSans: ["DM Sans", "sans serif"],
         },
         TransitionProprety: {
            height: "height",
         },
      },
   },
   plugins: [],
};
