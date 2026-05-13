/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050816',
        bgSecondary: '#0b1220',
        bgAccent: '#071421'
      },
      boxShadow: {
        glow: '0 0 25px rgba(45,212,191,0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
