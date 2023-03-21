<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = async function () {
  const { $httpClient } = useNuxtApp()
  const token = useCookie('token')

  const response = await $httpClient.post('/auth/login', {
    email: email.value,
    password: password.value,
  })

  token.value = response.data.data.token

  // navigateTo('/')
}
</script>
