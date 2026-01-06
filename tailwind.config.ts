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
        'header-bg': '#333333',
        'header-logo': '#ebebeb',
        'header-nav': '#969696',
        'header-nav-hover': '#ebebeb',
        
        // Content colors (light)
        'content-bg': '#ffffff',
        'content-text': '#000000',
        'content-muted': '#666666',
        'content-border': '#e5e5e5',
        
        // Footer (matching header)
        'footer-bg': '#333333',
        'footer-text': '#ebebeb',
        'footer-muted': '#969696',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        base: '18px',
        small: '14px',
        h1: '42px',
        h2: '28px',
      },
      lineHeight: {
        body: '1.7',
        heading: '1.2',
      },
      maxWidth: {
        content: '720px',
      },
      spacing: {
        'section': '80px',
        'element': '24px',
        'page-x': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
