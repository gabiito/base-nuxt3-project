import { defineStore } from 'pinia'

export const useWizardStore = defineStore('wizardStore', () => {
  /* -------------------------- STATE -------------------------- */

  const toastVisible = ref(false)

  /* -------------------------- ACTIONS -------------------------- */

  const showToast = () => {
    toastVisible.value = true

    setTimeout(() => {
      toastVisible.value = false
    }, 2500)
  }

  /* -------------------------- RETURN -------------------------- */

  return { toastVisible, showToast }
})
