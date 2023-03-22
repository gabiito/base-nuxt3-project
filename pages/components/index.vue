<template>
  <PageWrapper>
    <div class="w-full flex justify-center">
      <div class="w-1/2 space-y-4">
        <InputField label="Name" />
        <SelectField label="Options" :options="options" />
        <Switch label="Switch" />
        <div class="flex justify-center">
          <Dialog ref="dialog" title="Dialog">
            <template #trigger>
              <button
                type="button"
                class="w-72 rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Open dialog
              </button>
            </template>

            <template #content>
              <div class="space-y-4">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>

                <InputField label="Name" />

                <InputField label="Email" />

                <InputField label="Age" />

                <InputField label="Occupation" />

                <SelectField label="Options" :options="options" z-index="9" />
              </div>
            </template>

            <template #actions>
              <div class="w-full flex space-x-2">
                <Button
                  type="button"
                  @click="onDialogSave"
                  button-type="primary-outlined"
                >
                  Cancel
                </Button>
                <Button type="button" @click="onDialogSave"> Save </Button>
              </div>
            </template>
          </Dialog>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/layout/wrappers/PageWrapper'

import InputField from '@/components/common/inputs/InputField'
import SelectField from '@/components/common/inputs/SelectField'

import Button from '@/components/common/buttons/Button'

import Dialog from '@/components/common/others/Dialog'
import Switch from '@/components/common/others/Switch'

const dialog = ref(null)
const options = reactive([
  { key: '1', value: 'Wade Cooper' },
  { key: '2', value: 'Arlene Mccoy' },
  { key: '3', value: 'Devon Webb' },
  { key: '4', value: 'Tom Cook' },
  { key: '5', value: 'Tanya Fox' },
  { key: '6', value: 'Hellen Schmidt' },
])

const onDialogSave = () => {
  dialog.value.closeModal()
}
</script>
