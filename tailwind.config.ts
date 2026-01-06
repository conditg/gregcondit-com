import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Header colors (dark)
        'header-bg': '#2a2a2a',
        'header-logo': '#f5f4f2',
        'header-nav': '#a8a8a8',
        'header-nav-hover': '#f5f4f2',
        
        // Content colors (warm)
        'content-bg': '#faf9f7',
        'content-text': '#1a1a1a',
        'content-muted': '#6b6b6b',
        'content-border': '#e8e6e3',
        
        // Footer (matching header)
        'footer-bg': '#2a2a2a',
        'footer-text': '#f5f4f2',
        'footer-muted': '#a8a8a8',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        base: '19px',
        small: '14px',
        h1: '38px',
        h2: '28px',
      },
      lineHeight: {
        body: '1.75',
        heading: '1.25',
      },
      maxWidth: {
        content: '680px',
      },
      spacing: {
        'section': '96px',
        'element': '24px',
        'page-x': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
