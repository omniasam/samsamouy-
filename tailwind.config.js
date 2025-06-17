module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors:{
        mainColor:'#eb6731',
        darkblue:'#00103f',
        graylight:'#f6f6f6',
      },
      fontFamily: {
                rajdhani: ["var(--font-rajdhani)"],

      },
    },
  },
  plugins: [],
}
