module.exports = {
  theme: {
    minHeight: {
      '0': '0',
      '1/2': '50%',
      '1/4': '25%',
      '3/4': '75%',
      'full': '100%',
      '250': '250px',
      '200': '200px',
      '150': '150px',
    },
    extend: {
      padding: {
        '150': '150px'
      },
      margin: {
        '-150': '-150px'
      },
      width: {
        '50': '50px',
        '75': '75px'
      },
      height: {
        '50': '50px',
        '75': '75px'
      },
      minWidth: {
        '50': '50px',
        '75': '75px'
      },
      fontSize: {
        '7xl': '5em',
        '8xl': '6em',
        '9xl': '7em',
        '10xl': '8em',
      },
      fontFamily: {
        sans: [
          'Raleway', 'sans-serif'
        ],
        display: [
          'Sedgwick\\ Ave', 'serif'
        ]
      },
      colors: {
        blue: {
          default: '#00A3FF',
          dark: '#0077b7'
        },
        orange: {
          default: '#FF9900',
          semidark: '#AD5E00',
        },
        yellow: {
          default: '#FFC700',
          light: '#ffe07a'
        }
      },
    }
  },
  corePlugins: {
    container: false
  }
}