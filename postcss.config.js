module.exports = {
  theme: {
    fontFamily: {
      "sans-serif": ["Work Sans", "sans-serif"],
      MyFont: ['"My Font"', "serif"],
    },
    colors: {
      purple: {
        light: "#4F46E5",
      },
    },
    textColor: {
      primary: "#4F46E5",
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
