/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'], //файлы и папки которые взаимодействуют с фреймворком
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#3a73b19e'
      },
      padding: {
        big: '50px'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}
