/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: '#5860A5',
      primaryLight: '#7077B9',
      white: '#fafafa',
      black: '#000000',
      dark: '#262626',
      accent: '#89C7B4',
      grey: '#DCDCDC'
    },
    minWidth: {
      full: '100%',
      '3/4': '75%',
      '1/3': '33.33%'
    },
    screens: {
      xs: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  variants: {},
  plugins: []
}
