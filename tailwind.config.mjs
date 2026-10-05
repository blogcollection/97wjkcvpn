/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FFFFFF',
          section: '#F5F5F7',
          dark: '#1D1D1F',
          gray: '#6E6E73',
          border: 'rgba(0, 0, 0, 0.08)',
          blue: '#0071E3',
          blueHover: '#0077ED',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          'PingFang SC',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'apple-glow': '0 0 50px rgba(0, 113, 227, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(0.98)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
