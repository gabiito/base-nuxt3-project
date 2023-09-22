<template>
  <main class="w-full">
    <slot />
    <Toast />
    <Modal />
  </main>
</template>

<script setup>
import Toast from '@/components/common/others/Toast'
import Modal from '@/components/common/others/Modal'
</script>
