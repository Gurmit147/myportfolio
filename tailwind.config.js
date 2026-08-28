/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          cyan: '#00f0ff',
          neon: '#39ff14',
          purple: '#8a2be2',
          magenta: '#ff007f',
          blue: '#0070f3',
          dark: '#030712',
          surface: '#0a0f24',
          glass: 'rgba(10, 15, 36, 0.75)',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.45)',
        'neon-purple': '0 0 20px rgba(138, 43, 226, 0.45)',
        'neon-yellow': '0 0 20px rgba(224, 215, 49, 0.45)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

