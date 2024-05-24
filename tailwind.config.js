/** @type {import('tailwindcss').Config} */
const colors = {
  'capanda-light-grey': '#f8f9fa',
  'capanda-blue': '#0e2c57',
  'capanda-grey': '#ededed',
  'capanda-dark-grey': '#14171c',
  'capanda-red': '#aa0000',
};

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        capanda: {
          "primary": colors['capanda-grey'],
          "primary-content": "#000000",
          "secondary": colors['capanda-dark-grey'],
          "secondary-content": "#FFFFFF",
          "accent": colors['capanda-blue'],
          "accent-content": "#FFFFFF",
          "neutral": colors['capanda-light-grey'],
          "neutral-content": "#000000",
          "error": colors['capanda-red'],
          "error-content": "#FFFFFF"
        },
      },
    ],
  },
}
