<template>
  <PageWrapper>
    <div class="w-full flex justify-center pt-20">
      <form class="w-1/2 space-y-4" @submit.prevent="onSubmit">
        <h1 class="text-xl text-blue font-semibold text-center mb-8">
          Welcome, enter to your account
        </h1>
        <InputField
          id="email-input"
          v-model="email"
          type="email"
          name="email"
          label="Email"
        >
        </InputField>
        <InputField
          id="password-input"
          v-model="password"
          type="password"
          name="password"
          label="Password"
        />
        <Button id="submit-button" type="submit" button-type="secondary"
          >Login</Button
        >
      </form>
    </div>
  </PageWrapper>
</template>

<script setup>
import { ref } from 'vue'

import { useAuth } from '@/stores/auth'
import { useToast } from '@/stores/toast'

import PageWrapper from '@/components/layout/wrappers/PageWrapper'
import InputField from '@/components/common/inputs/InputField'
import Button from '@/components/common/buttons/Button'

/* ---------------------------------------------------------------- */

const { login } = useAuth()
const { show: showToast } = useToast()

const email = ref('')
const password = ref('')

/* ---------------------------------------------------------------- */

definePageMeta({
  layout: 'guest',
})

const onSubmit = async () => {
  try {
    await login({
      email: email.value,
      password: password.value,
    })

    navigateTo('/')
  } catch (ex) {
    showToast('Error', 'Something went wrong.', 'danger')
  }
}
</script>
