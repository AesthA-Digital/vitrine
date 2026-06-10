/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        black: "#0A0A0D",
        white: "#FFFFFF",

        // Neutrals
        gray: {
          light: "#8A8F9A",   // secondary text
          dark: "#14161C",    // cards / sections (Charcoal Graphite)
        },

        // Accents
        violet: {
          DEFAULT: "#782CFF", // Electric Violet
        },
        lavender: {
          DEFAULT: "#B18CFF", // Crystal Lavender
        },
        silver: {
          DEFAULT: "#DDE1E6", // Metallic Silver (primary text)
        },
      },

      backgroundImage: {
        "gradient-violet-lavender": "linear-gradient(135deg, #782CFF 0%, #B18CFF 100%)",
        "gradient-lavender-violet": "linear-gradient(135deg, #B18CFF 0%, #782CFF 100%)",
      },
    },
  },
  plugins: [],
};
