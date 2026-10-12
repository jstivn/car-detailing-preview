/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#000000',
          50: '#141416',
          100: '#111113',
          200: '#0d0d0f',
          300: '#08080a',
          900: '#000000',
        },
        chassis: {
          light: '#222226',
          DEFAULT: '#16161a',
          dark: '#0c0c0e',
        },
        titanium: {
          light: '#D1D5DB',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
        champagne: {
          light: '#E2CDBE',
          DEFAULT: '#C5A48E',
          dark: '#A37F67',
        },
        accent: {
          red: '#E11D48',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        mono: ['Oxanium', 'ui-monospace', 'monospace'],
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '1px',
        md: '2px',
        lg: '4px',
        none: '0px',
      },
      boxShadow: {
        'hairline': '0 0 0 1px rgba(255, 255, 255, 0.08)',
        'chassis': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
