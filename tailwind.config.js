/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
      },
      colors: {
        ivory: '#FFF9F2',
        cream: '#F7EFE5',
        burgundy: '#6B2737',
        rose: '#D8A7B1',
        mutedrose: '#BF8B96',
        champagne: '#C9A66B',
        charcoal: '#2C2927',
        softgray: '#77716D',
        sage: '#A8B5A2'
      },
      boxShadow: {
        photo: '0 26px 60px rgba(55, 39, 35, 0.16)'
      }
    }
  },
  plugins: [],
}
