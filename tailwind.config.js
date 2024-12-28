/** @type {import('tailwindcss').Config} */
import konstaConfig from 'konsta/config';

const tailwindConfig = konstaConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});

export default tailwindConfig;
