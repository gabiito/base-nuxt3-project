import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)

  function setUser(newUser) {
    user.value = newUser
  }

  return { user, setUser }
})
