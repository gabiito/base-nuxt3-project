<template>
  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0  sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="visible && component" ref="backdrop" class="modal-backdrop">
      <div
        :style="[
          {
            'max-width': data.maxWidth,
            'max-height': data.maxHeight ? data.maxHeight : null,
            height: data.height,
          },
        ]"
        class="modal"
        role="dialog"
      >
        <div
          class="pointer-events-auto relative flex max-h-[100%] w-full flex-col bg-white outline-none"
        >
          <div
            v-if="data.action || data.title || data.withCloseButton"
            class="px-8 py-6"
          >
            <div class="flex items-start justify-between">
              <BackButton
                v-if="data && data.backAction"
                class="mb-2.5"
                @click="data.backAction"
              />
              <span :class="data.titleStyle">{{ data.title }}</span>
              <XMarkCircleIcon
                v-if="data.withCloseButton"
                class="cursor-pointer w-5 h-5 text-secondary hover:text-dark-900 transform hover:rotate-180 transition-all duration-500 ease-in-out"
                @click="modal.hide"
              />
            </div>
          </div>
          <div
            class="w-full"
            :class="`${
              data.action || data.title || data.withCloseButton ? '' : 'mt-8'
            }`"
          >
            <component
              :is="component"
              v-if="component"
              :data="data.initialData"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useModal } from '@/stores/modal'

import { XMarkCircleIcon } from '@/components/common/icons'
import Button from '@/components/common/buttons/Button'
import { getComponentPath } from '@/utils/paths'

const modal = useModal()

const backdrop = ref(null)

const component = shallowRef(null)

const visible = computed(() => modal.visible)
const data = computed(() => modal.data)

watch(visible, (visible) => {
  document.body.classList.toggle('overflow-hidden', visible)
})

watch(data, (data) => {
  if (data && data.component) {
    const basePath = getComponentPath()
    try {
      component.value = defineAsyncComponent(() =>
        import(`${basePath}/modals/${data.component}.vue`)
      )
    } catch (error) {
      // Component not found
      console.log(error)
    }

    // if (!availableComponents.hasOwnProperty(data.component)) {
    //   console.error(
    //     `The component ${data.component} is not available in the modal component.`
    //   )
    //   return
    // }
    // component.value = availableComponents[data.component]
  }
})

onMounted(() => {
  document.addEventListener('keydown', escapeKeyHandler)
  document.addEventListener('click', outsideClickHandler)
})

const escapeKeyHandler = (e) => {
  if (e.key === 'Escape' && visible) {
    modal.hide()
  }
}

const outsideClickHandler = (e) => {
  if (backdrop.value === null) return

  if (e.target === backdrop.value && visible) {
    modal.hide()
  }
}
</script>

<style scoped>
.modal-backdrop {
  @apply bg-black bg-opacity-30 z-40 fixed top-0 inset-0 w-full flex justify-center px-8 py-10;
}

.modal {
  @apply bg-white z-50 rounded-xl overflow-y-auto w-full;
}

@media (max-width: 767px) {
  .modal {
    max-width: 100% !important;
    max-height: auto !important;
  }
}
</style>
