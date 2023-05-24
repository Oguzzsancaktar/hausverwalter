/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/views/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: () => ({
        black: '#000000',
        black1: '#080809',
        black2: '#212832',

        gray: '#89888C',

        white3: '#E5E5E5',
        white2: '#F7F7F7',
        white1: '#F8F8F8',
        white: '#FFFFFF',

        purple: '#14183E',
        purple1: '#39425D',
        purple2: '#4E4E73',
        purple3: '#5E6282',

        blue: '#0179C0',
        blueDark: '#012269',
        blueLight: '#EFF8FF',

        olive: '#969E03',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        welcome: "url('/assets/images/shared/material-welcome-background.svg')",
      },
    },
  },
  plugins: [],
}
