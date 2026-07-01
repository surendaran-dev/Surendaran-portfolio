/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#0B1120', soft: '#111A2E', card: '#141E33' },
        bone:   { DEFAULT: '#F4F1E9', soft: '#FFFFFF', card: '#FDFBF6' },
        signal: { DEFAULT: '#F4A825', dim: '#B97D14' },
        cipher: { DEFAULT: '#5EEAD4', dim: '#2DD4BF' },
        slate:  { muted: '#8892B0', mutedLight: '#5B6478' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'cipher-grid': 'radial-gradient(circle, rgba(94,234,212,0.10) 1px, transparent 1px)',
      },
      backgroundSize: { 'grid-sm': '26px 26px' },
      animation: {
        'decrypt-blink': 'blink 1s steps(1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
