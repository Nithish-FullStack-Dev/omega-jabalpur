// tailwind.config.js
module.exports = {
  // ... your existing config
  plugins: [
    // ... your other plugins
    require("tailwindcss-animate"),
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "402px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      colors: {
        "light-teal": "var(--light-teal)",
        "light-orange": "var(--light-orange)",
      },
    },
  },
};
