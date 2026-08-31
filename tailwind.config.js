/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#060709',
        charcoal: '#0d0f12',
        subtle: '#14181f',
        violetAccent: '#8b5cf6',
        violetGlow: '#6d28d9',
        cyanAccent: '#38bdf8',
        lineBorder: 'rgba(255, 255, 255, 0.08)'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['DM Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}