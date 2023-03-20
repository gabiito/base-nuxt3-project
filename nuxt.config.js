import eslintVitePlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  plugins: [{ src: '@/plugins/init.js', mode: 'client' }],
  css: ['@/assets/css/main.css'],
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
    },
  },
})
