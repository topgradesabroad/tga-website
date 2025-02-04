// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
    './pages/**/*.{js,ts,jsx,tsx}',  // Next.js pages
    './components/**/*.{js,ts,jsx,tsx}',  // Next.js components
  ],
  theme: {
    extend: {
      colors: {
        lightgrey:"#F8F8F6",
      }

    },
  },
  plugins: [],
}