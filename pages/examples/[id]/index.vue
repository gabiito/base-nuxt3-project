<template>
  <div v-if="!loading" class="w-full">
    <Card v-if="current" class="p-2">
      {{ current.title }}
    </Card>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import Card from '@/components/common/others/Card'
import { useExamplesStore } from '@/stores/examples'

/* ----------------------------------------------------------------- */

const route = useRoute()
const exampleStore = useExamplesStore()
const loading = ref(true)
const current = computed(() => exampleStore.current)
const id = route.params.id

/* ----------------------------------------------------------------- */

definePageMeta({
  middleware: ['authenticated'],
})

onMounted(async () => {
  try {
    loading.value = true
    await exampleStore.show(id)
  } catch (ex) {
    console.log(ex)
  } finally {
    loading.value = false
  }
})
</script>
