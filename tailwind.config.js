module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Raleway',
        ],
      },
    }
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}