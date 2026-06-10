/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🌑 Base
        black: "#000000",
        white: "#FFFFFF",

        // ⚪ Neutres
        gray: {
          light: "#B0B0B0",   // texte secondaire
          dark: "#1A1A1A",    // background secondaire (cartes/sections)
        },

        // 🎯 Accents
        violet: {
          DEFAULT: "#6C2FF9", // violet néon
        },
        blue: {
          DEFAULT: "#1E90FF", // bleu électrique
        },
        green: {
          DEFAULT: "#00C896", // vert émeraude
        },
      },

      backgroundImage: {
        // 🌌 Dégradés
        "gradient-blue-violet": "linear-gradient(135deg, #1E90FF 0%, #6C2FF9 100%)",
        "gradient-green-blue": "linear-gradient(135deg, #00C896 0%, #1E90FF 100%)",
      },
    },
  },
  plugins: [],
};
