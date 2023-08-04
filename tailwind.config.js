/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

   extend: {
      fontFamily: {
        Cairo: ['var(--font-Cairo)'],
   
      },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },
    },
  },
    daisyui: {
      themes: [{
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#3b82f6",
          
        },
      }, "dark", "cupcake"],
    },
  plugins: [require("daisyui")],
}