<template>
  <div class="w-full h-screen flex justify-center items-center">
    <h1 class="text-4xl">{{ $config.appName }} - {{ user.name }}</h1>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

definePageMeta({
  middleware: ['authenticated'],
})

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>
