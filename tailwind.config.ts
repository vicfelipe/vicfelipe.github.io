import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [typography],
  theme: {
    extend: {},
  },
} satisfies Config;