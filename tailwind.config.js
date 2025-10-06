/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "#0b0710",
        navInner: "#120717",
        navBorder: "#31213d",
      },
      boxShadow: {
        "inset-md": "inset 0 4px 14px rgba(0,0,0,0.65), inset 0 -2px 4px rgba(255,255,255,0.02)",
        "inset-lg": "inset 0 10px 30px rgba(0,0,0,0.75), inset 0 -3px 6px rgba(255,255,255,0.03)",
      },
    },
  },
  plugins: [],
};
