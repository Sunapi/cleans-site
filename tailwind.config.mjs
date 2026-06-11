/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F2A55',
          dark: '#1E1A3A',
          light: '#3D3770',
        },
        secondary: {
          DEFAULT: '#4C4388',
          light: '#5E54A0',
        },
        accent: {
          DEFAULT: '#6C63B8',
          light: '#8B84CC',
          glow: '#9B91D4',
        },
        surface: {
          DEFAULT: '#F6F5FF',
          dark: '#EEEDFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2F2A55 0%, #4C4388 50%, #6C63B8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #6C63B8 0%, #9B91D4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E1A3A 0%, #2F2A55 40%, #4C4388 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(108,99,184,0.1) 0%, rgba(76,67,136,0.05) 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(108,99,184,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(108,99,184,0.3)',
        'glow-lg': '0 0 80px rgba(108,99,184,0.4)',
        'card': '0 4px 24px rgba(47,42,85,0.12)',
        'card-hover': '0 8px 48px rgba(47,42,85,0.2)',
        'glass': '0 8px 32px rgba(47,42,85,0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
