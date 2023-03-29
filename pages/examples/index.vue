<template>
  <PageWrapper>
    <div v-if="!loading" class="w-full">
      <div v-if="items.length > 0" class="space-y-4 mt-10">
        <Card
          v-for="item in items"
          :key="item.id"
          class="p-4 cursor-pointer"
          @click="router.push({ path: `/examples/${item.id}` })"
        >
          Title: {{ item.title }}
        </Card>
      </div>
      <div v-else class="w-full mt-10 flex justify-center items-center">
        No elements to show
      </div>
    </div>
    <div v-else>Loading...</div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/layout/wrappers/PageWrapper'
import Card from '@/components/common/others/Card'

import { useExamplesStore } from '@/stores/examples'
import { useWizardStore } from '@/stores/wizard'

/* ----------------------------------------------------------------- */

const router = useRouter()
const exampleStore = useExamplesStore()
const wizardStore = useWizardStore()
const loading = ref(true)
const items = computed(() => exampleStore.items)

/* ----------------------------------------------------------------- */

definePageMeta({
  middleware: ['authenticated'],
})

onMounted(async () => {
  try {
    loading.value = true
    await exampleStore.get()
    wizardStore.showToast()
  } catch (ex) {
    console.log(ex)
  } finally {
    loading.value = false
  }
})
</script>
