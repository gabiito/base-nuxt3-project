module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  theme: {
    extend: {
      colors: {
        primary: {
          'DEFAULT': '#EB5757',
          'light-100': '#EB5757',
          'light-200': '#EB5757',
          'dark-100': '#EB5757',
        },
        secondary: {
          'DEFAULT': '#060E2C',
          'light-100': '#060E2C',
          'light-200': '#060E2C',
          'dark-100': '#060E2C',
        }
      }
    },
  },
  plugins: [],
}