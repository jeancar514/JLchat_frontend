module.exports = {
  content: [
    './**/*.{html,js}'

  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      intmd:'900px',
      lg: '1024px',
      xl: '1280px',
      '2xl':'1536px'
    },
    extend: {
      backgroundImage: theme => ({
        'imagenLeo': "url('./assets/leo.jpg')",
      }),
      transitionProperty: {
        'left': 'left'
      },
      transitionTimingFunction: {
      'rebote': 'cubic-bezier(0.175, 0.885, 0.320, 1.275);'
      }
    },
  },
  plugins: [],

}
