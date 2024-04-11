/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-mono': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
