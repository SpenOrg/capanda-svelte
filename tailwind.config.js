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
          "accent": colors['capanda-red'],
          "neutral": colors['capanda-blue'],
          "secondary": colors['capanda-light-grey'],
          "base-200": colors['capanda-grey'],
          "base-300": colors['capanda-dark-grey'],
        },
      },
    ],
  },
}
