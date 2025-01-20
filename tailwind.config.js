/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'sans': ['DM Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'sans-serif'],
     },
     backgroundImage: {
      'tropical': "url('assets/images/home-package-1.png')"
     },
     colors: {
      "default": "#141414",
      "cream" : "#f3f3f3"
     }
    },
  },
  plugins: [],
}

