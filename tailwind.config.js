/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "768px",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      backgroundImage: {
        mobile:
          "url(./images/bg-pattern-top-mobile.svg), url(./images/bg-pattern-bottom-mobile.svg)",
        desktop:
          "url(./images/bg-pattern-top-desktop.svg), url(./images/bg-pattern-bottom-desktop.svg)",
      },
      backgroundPosition: {
        pos: "left top, right bottom",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
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
