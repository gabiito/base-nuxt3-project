import eslintVitePlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    plugins: [
      { src: '@/plugins/axios.js', mode: 'client' },
    ],
    css: [
      '@/assets/css/main.css',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    vite: {
        plugins: [
          eslintVitePlugin({
            include: ['./**/*.vue']
          }),
        ],
    },
    runtimeConfig: {
        public: {
            appName: process.env.APP_NAME,
            appUrl: process.env.APP_URL,
            apiBaseUrl: process.env.API_BASE_URL,
        }
    },
})
