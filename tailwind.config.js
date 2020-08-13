const convert = require('color-convert');
const { colors } = require('tailwindcss/defaultTheme');
const { azColors, screens } = require('./designtokens');
// Build rgb-descripton from hex color, results in something lik 0,0,0
const shadowColorGold = convert.hex.rgb(azColors['ci-gold'][700]).join(',');
const shadowColorBlue = convert.hex.rgb(azColors['ci-blue'][500]).join(',');

module.exports = {
  purge: process.env.REACT_APP_NO_PURGE ? false : ['./src/**/*.{tsx,ts}'],
  theme: {
    colors: {
      ...colors,
      'cool-gray': azColors['cool-gray'],
      'warm-gray': azColors['warm-gray'],
      'ci-blue': azColors['ci-blue'],
      'ci-gold': azColors['ci-gold'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: `${screens.sm}px`,
      md: `${screens.md}px`,
      lg: `${screens.lg}px`,
      xl: `${screens.xl}px`,
    },
    extend: {
      boxShadow: {
        'outline-gold': `0 0 0 3px rgba(${shadowColorGold}, 0.5)`,
        'outline-blue': `0 0 0 3px rgba(${shadowColorBlue}, 0.5)`,
      },
      fontFamily: {
        condor: ['Condor', 'Helvetica', 'sans-serif'],
        montserat: ['Montserat', 'Helvetica', 'sans-serif'],
        'whitman-roman': ['WhitmanRoman', 'Times', 'serif'],
        'whitman-display': ['WhitmanDisplay', 'Times', 'serif'],
      },
      height: {
        halfVW: '50vw',
        fourthVW: '25vw',
      },
      minWidth: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      maxWidth: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
