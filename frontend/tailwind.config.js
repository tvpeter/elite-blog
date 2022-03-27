module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: "repeat(auto-fill, minmax(18.75rem, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      colors: {
        purple: "#6246EA",
        dark: "#001858",
        "app-black": "#2B2C34",
        "light-purple": "#EFECFD",
      },
    },
  },
  plugins: [],
};
