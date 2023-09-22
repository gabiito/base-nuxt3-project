import eslintVitePlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      eslintVitePlugin({
        include: ['./**/*.vue', './**/*.js'],
      }),
    ],
  },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
      appUrl: process.env.APP_URL,
      apiBaseUrl: process.env.API_BASE_URL,
      componentsDir: __dirname + '/components',
    },
  },
})
