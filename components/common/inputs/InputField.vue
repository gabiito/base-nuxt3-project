<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
      >Email</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        :id="props.id"
        :type="props.type"
        :name="props.name"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :class="{
          'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500':
            props.error !== '',
        }"
        class="block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="props.error !== ''"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <ExclamationIcon class="h-5 w-5" aria-hidden="true" />
      </div>
    </div>
    <p
      v-if="props.error !== ''"
      class="mt-2 text-sm text-red-600"
      id="email-error"
    >
      Not a valid email address.
    </p>
  </div>
</template>

<script setup>
import { ExclamationIcon } from '@/components/common/icons'

const props = defineProps({
  id: String,
  type: String,
  name: String,
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})
</script>
