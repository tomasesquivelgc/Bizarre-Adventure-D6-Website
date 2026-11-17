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
        "jojo-pink": "#F50D7A",
        "jojo-rose": "#FF79B4",
        "jojo-blush": "#FFD6E7",
        "jojo-red": "#EB0E17",
      },
      fontFamily: {
        "arial-narrow": [
          '"Arial Narrow"',
          "Arial",
          "sans-serif",
        ],
        "sf-fedora": [
          '"SF Fedora"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "josefin-slab": [
          '"Josefin Slab"',
          "ui-serif",
          "Georgia",
          "serif",
        ],
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
