/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ['JetBrains Mono', 'monospace'],
        BebasNeue: ['Bebas Neue', 'cursive'],
       },
    },
  },
  plugins: [],
}
