/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'capanda-light-grey': '#f8f9fa',
        'capanda-blue': '#0e2c57',
        'capanda-grey': '#ededed',
        'capanda-dark-grey': '#14171c',
        'capanda-red': '#aa0000',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}