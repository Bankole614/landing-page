/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        asphalt: '#0c0d10',
        tarmac: '#15171c',
        pit: '#1d2027',
        kerb: '#e10600',
        tyre: '#ffd60a',
        chalk: '#f2f1ec',
        fog: '#9a9ea8',
        sector: '#22c55e',
        purple: '#a855f7',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
