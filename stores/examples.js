import { defineStore } from 'pinia'

import useRequest from '@/composables/useRequest'

export const useExamplesStore = defineStore('examplesStore', () => {
  /* -------------------------- STATE -------------------------- */

  const examples = ref([])

  /* -------------------------- ACTIONS -------------------------- */

  const getExamples = async () => {
    const { get } = useRequest()

    const response = await get('https://jsonplaceholder.typicode.com/todos')

    if (response.status !== 200) {
      throw new Error(response.data)
    }

    examples.value = [...response.data]
  }

  /* -------------------------- RETURN -------------------------- */

  return { getExamples, examples }
})
