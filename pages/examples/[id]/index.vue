<template>
  <PageWrapper>
    <div v-if="!loading" class="w-full mt-10">
      <Card v-if="current" class="p-4"> Title: {{ current.title }} </Card>
    </div>
    <div v-else>Loading...</div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/layout/wrappers/PageWrapper'
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
