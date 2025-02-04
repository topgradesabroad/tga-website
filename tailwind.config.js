// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: "#F8F8F6",
      },
      fontFamily: {
        sans: `var(--font-dm-sans)`, // Use the CSS variable!
        poppins: `var(--font-poppins)`, // Use the CSS variable!
      },
    },
  },
  plugins: [],
}