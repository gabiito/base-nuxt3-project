import eslintVitePlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
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
            apiUrl: process.env.API_URL,
        }
    },
})
