export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')

  if (!token.value) {
    navigateTo('/auth/login')
  }
})
