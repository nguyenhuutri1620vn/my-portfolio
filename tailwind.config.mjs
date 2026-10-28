/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        brown: token('brown'),
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
        h2: ['1.75rem', { lineHeight: '1.25' }],
        h3: ['1.125rem', { lineHeight: '1.4' }],
        tag: ['0.75rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        btn: 'var(--radius-btn)',
        tag: 'var(--radius-tag)',
        frame: 'var(--radius-frame)',
      },
      maxWidth: {
        container: 'var(--container)',
        article: 'var(--article)',
        prose: '68ch',
      },
      spacing: {
        section: '96px',
        'section-sm': '64px',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
      },
    },
  },
  plugins: [],
};
