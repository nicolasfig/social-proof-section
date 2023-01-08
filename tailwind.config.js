/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        primary: {
          "very-dark-magenta": "hsl(300, 43%, 22%)",
          "soft-pink": "hsl(333, 80%, 67%)",
        },
        neutral: {
          "dark-grayish-magenta": "hsl(303, 10%, 53%)",
          "light-grayish-magenta": "hsl(300, 24%, 96%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
