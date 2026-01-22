/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'primary': '#00d4ff', // Neon blue
        'primary-hover': '#00a8cc',
        'secondary': '#ff0080', // Neon pink
        'accent': '#00ff88', // Neon green
        'light-text': '#ffffff',
        'dark-text': '#b0b0b0',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate-3d': 'rotate3d 10s linear infinite',
        'bounce-3d': 'bounce3d 2s infinite',
        '3d-float': '3d-float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff' },
          '100%': { boxShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        bounce3d: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
          '40%': { transform: 'translateY(-10px) rotateX(10deg)' },
          '60%': { transform: 'translateY(-5px) rotateX(-5deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-12': 'rotateY(12deg)',
        'x-12': 'rotateX(12deg)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
}
