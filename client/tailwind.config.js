/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
         'tiny': '580px',
         'md': '800px',
         'lg': '1100px'
    },
    extend: {
          fontFamily: {
                 dmSans: 'var(--font-dm-sans)',
                 primary: ['Madera-Regular', 'sans-serif'],
                 lightened: ['Madera-Light', 'sans-serif'],
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
