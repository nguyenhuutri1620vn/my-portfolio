/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: token('accent'),
        ink: token('ink'),
        white: token('white'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        h1: ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
        tag: ['0.75rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        btn: 'var(--radius-btn)',
      },
      maxWidth: {
        container: 'var(--container)',
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
