/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    '.-rotate-90-x-180': {
      transform: 'rotate(-90deg) rotateX(180deg) translateY(160px)',
    },
    '.rotate-filling-active': {
      transform: 'translate(-50%, -50%) rotate(-90deg)'
    },
    '.rotate-bun-bottom-active': {
      transform: 'translate(-50%, -50%) rotate(405deg)'
    },
    '.rotate-bun-top-active': {
      transform: 'translate(-50%, -50%) rotate(-225deg)'
    },
    '.rotate-filling':  {
      transform: 'translate(-50%, -50%) rotate(180deg)'
    },
    '.rotate-bun': {
      transform: 'translate(-50%, -50%) rotate(0deg)'
    },
    '.translate-0-45': {
      transform: 'translate(0%, -45%)'
    },
    '.transition-bun-filling': {
      transition: 'top 0.4s ease 0.4s, transform 0.4s ease 0.4s'
    },
    '.transition-before-after': {
      transition: 'background 0.2s ease, box-shadow 0.2s ease'
    },
    '.transition-bun-active': {
      transition: 'top 0.4s ease, transform 0.4s ease'
    },
    '.text-shadow-search': {
      'text-shadow': '1px 1px 0px #ff0000'
    }
  })
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        switch: {
          default: '#B94A37',
          hover: "#c09853",
          checked: "#468847"
        },

        yoda: {
          from: 'rgb(135, 220, 90)',
          via: 'rgb(254, 254, 254)',
          to: 'rgb(135, 220, 90)'
        },
        label: {
          from: 'rgba(226, 226, 226, 1)',
          via: 'rgba(209, 209, 209, 1)',
          to: 'rgba(254, 254, 254, 1)'
        }
        
      },
      height: {
        "inherit": 'inherit'
      },
      boxShadow: {
        'bun-top': '#f00 0px 0px 10px 1px',
        'bun-bottom': '#0ff 0px 0px 10px 1px',
        'filling': '#0f0 0px 0px 10px 1px'
      },
      animation: {
        yoda: 'yoda 2s infinite',
        burger: 'fadein 0.2s ease 1s forwards',
        'filling-in': 'green-ls-in 0.8s ease forwards',
        'filling-out': 'green-ls-out 0.8s ease forwards',

      },
      keyframes: {
        yoda: {
          'from': { 'box-shadow': '0 0 10px #7EC855' },
          '50%': { 'box-shadow': '0 0 16px #7EC855' },
          'to': { 'box-shadow': '0 0 10px #7EC855' }
        },
        'green-ls-in': {
          '0%': { 'transform': 'translate(-50%, -50%) rotate(180deg)' },
          '50%': { 'transform': 'translate(-50%, -50%) rotate(-90deg)' },
          '100%': { 'transform': 'translate(-50%, -50%) rotate(-90deg) translate(200%, 0%)' }
        },
        'green-ls-out': {
          '0%': { 'transform': 'translate(-50%, -200%) rotate(-90deg)' },
          '50%': { 'transform': 'translate(-50%, -50%) rotate(-90deg)' },
          '100%': { 'transform': 'translate(-50%, -50%) rotate(180deg)' }
        },
        'fadein': {
          'from': {opacity: 0},
          'to': {opacity: 1}
        }
      }
    },
  },
  plugins: [rotate],
}

