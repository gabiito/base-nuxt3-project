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

const login = function () {
  const token = useCookie('token')
  token.value = 'hyurytdsfagbncasiopihdas678'

  navigateTo('/')
}
</script>
