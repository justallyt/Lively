/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
          fontFamily: {
                 dmSans: 'var(--font-dm-sans)',
                 primary: 'var(--font-red-hat-display)',
                 boldish: ['Madera-Bold', 'sans-serif'],
                 semiboldish: ['Madera-Extra', 'sans-serif']
          },
          backgroundImage: {
                'hero-pattern': ''
          }
    },
  },
  plugins: [],
}
