import { defineStore } from 'pinia'

export const useModal = defineStore('modal', () => {
  /* -------------------------- STATE -------------------------- */

  const visible = ref(false)

  const data = ref({
    component: '',
    title: '',
    titleStyle: 'text-md',
    initialData: {},
    maxWidth: '',
    maxHeight: '',
    height: '',
    functions: {},
    backAction: null,
    withCloseButton: true,
  })

  /* -------------------------- ACTIONS -------------------------- */

  const show = ({
    component = '',
    title = '',
    titleStyle = 'text-md',
    initialData = {},
    maxWidth = '',
    maxHeight = '',
    height = '',
    functions = {},
    backAction = null,
    withCloseButton = true,
  } = {}) => {
    data.value = {
      component,
      title,
      titleStyle,
      initialData,
      maxWidth,
      maxHeight,
      height,
      functions,
      backAction,
      withCloseButton,
    }

    visible.value = true
  }

  const hide = () => {
    visible.value = false
    data.value = {
      component: '',
      title: '',
      titleStyle: 'text-md',
      initialData: {},
      maxWidth: '',
      maxHeight: '',
      height: '',
      functions: {},
      backAction: null,
      withCloseButton: true,
    }
  }

  /* -------------------------- RETURN -------------------------- */

  return { visible, data, show, hide }
})
