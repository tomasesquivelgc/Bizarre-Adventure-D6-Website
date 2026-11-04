/** @type {import("tailwindcss").Config} */
export default {
  theme: {
    extend: {
      fontSize: {
        "gr-caption": "0.618rem",
        "gr-body": "1rem",
        "gr-h2": "1.618rem",
        "gr-h1": "2.618rem",
        "gr-hero": "4.236rem",
      },
      spacing: {
        "gr-sm-half": "19.1%",
        "gr-bg-half": "30.9%"
      },
      width: {
        "gr-big": "61.8%",
        "gr-small": "38.2%",
      },
      colors: {
        brand: "#6b9edf",
        muted: "#6b7280",
        bg: "#E3B6DF",
        "bg-dk": "#b140a6",
        "bg-lt": "#e0aadb",
        "bg-hl": "#D9B8FF",
        fg: "#000000",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
};
