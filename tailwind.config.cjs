/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xl' : {'min' : '1343px'},
        'lg' : {'max': '1342px' , 'min' : '1258px'},
        'md' : {'max' : '1257px', 'min' : '753px'},
        'sm' : {'max' : '752px' ,  'min' : '621px'},
        'xs' : {'max' : '620px' , 'min' : '551px'},
        'xxs' : {'max' : '550px'}
      },
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", "monospace"],
        BebasNeue: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
