<template>
  <form @submit.prevent="login">
    <InputField v-model="email" id="email" type="email" name="email" />
    <InputField
      v-model="password"
      id="password"
      type="password"
      name="password"
    />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRequest } from '@/composables/useRequest'

import InputField from '@/components/common/inputs/InputField'

const email = ref('')
const password = ref('')
const token = useCookie('token')
const { post } = useRequest()

const login = async function () {
  const response = await post('/auth/login', {
    email: email.value,
    password: password.value,
  })

  token.value = response.data.data.token

  navigateTo('/')
}
</script>
