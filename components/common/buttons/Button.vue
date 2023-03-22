<template>
  <button
    :type="type"
    :class="{
      'button-primary': buttonType === 'primary',
      'button-primary-outlined': buttonType === 'primary-outlined',
      'button-secondary': buttonType === 'secondary',
    }"
    class="w-full flex justify-center rounded-md py-2 px-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  buttonType: {
    type: String,
    default: 'primary',
  },
})
</script>

<style scoped>
.button-primary-outlined {
  @apply bg-white border border-primary text-primary hover:text-white hover:bg-primary-200 focus-visible:outline-primary-600;
}

.button-primary {
  @apply bg-primary text-white hover:bg-primary-200 focus-visible:outline-primary-600;
}

.button-secondary {
  @apply bg-secondary text-white hover:bg-secondary-600 focus-visible:outline-primary-600;
}
</style>
