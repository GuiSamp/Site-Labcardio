/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'Laranja-1': '#ffcc33',
        'Laranja-2': '#ffa832',
        'Laranja-3': '#fe8330',
        'Laranja-4': '#fe5f2f',
        'Laranja-5': '#fd3a2d',
      },

      spacing: {
        '128': '32rem',
      },

      height: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        '1/12': '8.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '11/12': '91.666667%',
        '1/20': '5%',
        '3/20': '15%',
        '11/20': '55%',
        '17/20': '85%',
        // Adicione mais conforme necessário
      },
    },
  },

  plugins: [
    require('flowbite/plugin'),
    require('tailgrids/plugin'),
  ],
}

