// tailwind.config.js
module.exports = {
  // ... your existing config
  plugins: [
    // ... your other plugins
    require("tailwindcss-animate"),
  ],
  extend: {
    fontFamily: {
      sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
    },
  },
  theme: {
    screens: {
      xl: "1280px",
      xs: "402px",
    },
  },
};
