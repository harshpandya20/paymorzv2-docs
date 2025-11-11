import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./app/**/*.{ts,tsx,mdx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {} },
  plugins: [],
})
