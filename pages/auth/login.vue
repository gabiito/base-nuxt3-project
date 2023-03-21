<template>
  <PageWrapper>
    <div class="w-full flex justify-center pt-20">
      <form class="w-1/2 space-y-4" @submit.prevent="login">
        <h1 class="text-xl text-blue font-semibold text-center mb-8">
          Welcome, enter to your account
        </h1>
        <InputField
          v-model="email"
          id="email"
          type="email"
          name="email"
          label="Email"
        >
        </InputField>
        <InputField
          v-model="password"
          id="password"
          type="password"
          name="password"
          label="Password"
        />
        <Button type="submit" button-type="secondary">Login</Button>
      </form>
    </div>
  </PageWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { useRequest } from '@/composables/useRequest'

import PageWrapper from '@/components/layout/wrappers/PageWrapper'
import InputField from '@/components/common/inputs/InputField'
import Button from '@/components/common/buttons/Button'

const email = ref('')
const password = ref('')
const token = useCookie('token')
const { post } = useRequest()

definePageMeta({
  layout: 'guest',
})

const login = async function () {
  const response = await post('/auth/login', {
    email: email.value,
    password: password.value,
  })

  token.value = response.data.data.token

  navigateTo('/')
}
</script>
