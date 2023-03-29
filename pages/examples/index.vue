<template>
  <div v-if="!loading" class="w-full">
    <div v-if="examples.length > 0" class="space-y-4 mt-10">
      <Card v-for="example in examples" :key="example.id" class="p-2">
        {{ example.title }}
      </Card>
    </div>
    <div v-else class="w-full mt-10 flex justify-center items-center">
      No elements to show
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import Card from '@/components/common/others/Card'
import { useExamplesStore } from '@/stores/examples'

/* ----------------------------------------------------------------- */

const store = useExamplesStore()
const loading = ref(true)
const examples = computed(() => store.examples)

/* ----------------------------------------------------------------- */

onMounted(async () => {
  try {
    loading.value = true
    await store.getExamples()
  } catch (ex) {
    console.log(ex)
  } finally {
    loading.value = false
  }
})
</script>
