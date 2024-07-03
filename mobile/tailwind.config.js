/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['.src/screens/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './App.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         "mobile-md": "400px"
      },
      fontFamily: {
         latoLight: ['Lato_300Light'],
         latoRegular: ['Lato_400Regular'],
         latoBold: ['Lato_700Bold'],
         LatoBlack: ['Lato_900Black'],
      },
      extend: {
         colors: {
            azul: '#374b5c',
            amarilloOsc: '#ffb300',
            amarilloClaro: "#ffbe26",
            azulClaro: '#6d90df'
         },
         screens: {
            md: { 'raw': '(max-height: 700px)' },            
          },
      },
   },
   plugins: [],
};
