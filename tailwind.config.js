/** @type {import('tailwindcss').Config} */
module.exports = {
  // This more specific pattern tells Tailwind to only look for .html and .js
  // files in the root directory, which avoids scanning node_modules.
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
