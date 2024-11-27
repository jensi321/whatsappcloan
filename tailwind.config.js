/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow1': '0 17px 50px 0 rgba(11, 20, 26, .19), 0 12px 15px 0 rgba(11, 20, 26, .24)',
       
          'custom': '0px 6px 18px rgba(11,20,26 ,.05)',
       
      },
      zIndex: {
        '-1': '-1',
        '2': '2',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'black-rgb': '#0B141A',
        'black-rgba': '#0b141a06',
        'primary-text': '#111b21',
        'primary-title': '#41525d',
        'gray-200': '#d1d7db',
        'gray-700': '#3b4a54',
        'secondary-stronger': '#8696a0',
        'secondary-emphasized': '#54656f',
        'active': 'rgba(11, 20, 26, .1)',
        'border-default': '#e9edef; ',
        'green-1': '#00a884',
        'button-1': '#008069',
        'teal': '#008069',


      },
    },
  },
  plugins: [],
}