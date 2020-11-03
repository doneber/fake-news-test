module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    themeColor: '#4A4A4A',
    manifestOptions: {
      background_color: '#9B9B9B'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/twittest/' : '/',
}