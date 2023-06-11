/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['"Roboto"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      translate: ['motion-reduce'],
      colors: {
        'regal-blue': '#1466b7',
      },
      maxHeight: {
        '128': '32rem',
    },
    width: {
      'img': '400px',
      '500': '5000px',
      '9/1':'90%',
      '8/1':'80%',
      '7/1':'70%',
      'input':'539px'
    },
    height: {
      '300': '300px',
    },
    margin: {
      '40%': '40%',
      '1/2':'50%',
      '1/3':'30%'
    },
    letterSpacing:{
      '.5rem':'0.5rem'
    },
    backgroundImage: {
      // 'hero-pattern': "url('https://www.w3schools.com/w3images/parallax1.jpg')",
      'hero-pattern': "url(/public/image/parallax1.jpg)",
      'bg2': "url('https://www.w3schools.com/w3images/parallax2.jpg')",
      'bg3': "url('https://www.w3schools.com/w3images/parallax3.jpg')",
    },
    backgroundColor:{
      'balck1':'#616161',
      'button':'#f1f1f1'
    },
    screens: {
      'iphone': '200px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
}
