/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#202938",
        "my-gray": "#9ba3ac",
      },
    },
  },
  plugins: [],
};
