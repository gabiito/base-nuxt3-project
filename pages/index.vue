<template>
  <div class="w-full h-screen flex justify-center items-center">
    <h1 class="text-4xl">{{ $config.appName }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['authenticated'],
})
</script>
