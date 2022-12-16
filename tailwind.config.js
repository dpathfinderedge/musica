module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#1D2123',
        'dark-alt': '#1A1E1F',
        'primary-gray': 'rgba(255, 255, 255, 0.25)',
        'secondary-gray': 'rgba(255, 255, 255, 0.5)',
        'primary-yellow': '#FACD66',
      },
      dropShadow: {
        '3xl': '-3.4px 0px 3.4px rgba(0, 0, 0, 0.38)',
        '4xl': '0px 0px 18px rgba(255, 255, 255, 0.3)'
      }
    },
  },
  plugins: [],
};