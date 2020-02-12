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
      width: {
        '50': '50px',
        '75': '75px'
      },
      height: {
        '50': '50px',
        '75': '75px'
      },
      fontFamily: {
        sans: [
          'Raleway',
        ],
        display: [
          'Sedgwick Ave'
        ]
      },
      colors: {
        blue: {
          default: '#00A3FF',
          dark: '#0077b7'
        },
        orange: {
          default: '#FF9900',
          semidark: '#FF6700',
        },
      },
    }
  },
  corePlugins: {
    container: false
  }
}