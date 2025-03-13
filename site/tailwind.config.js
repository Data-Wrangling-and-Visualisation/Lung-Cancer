/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D", // Dark Gray
        secondary: "#E5E5E5", // Light Gray
        accent: "#FFFFFF", // White
      },
    },
  },  
  plugins: [],
};
