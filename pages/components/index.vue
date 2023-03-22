<template>
  <PageWrapper>
    <div class="w-full flex justify-center">
      <div class="w-1/2 space-y-4">
        <InputField label="Name" />
        <SelectField label="Options" :options="options" />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/layout/wrappers/PageWrapper'
import InputField from '@/components/common/inputs/InputField'
import SelectField from '@/components/common/inputs/SelectField'

const options = reactive([
  { key: '1', value: 'Wade Cooper' },
  { key: '2', value: 'Arlene Mccoy' },
  { key: '3', value: 'Devon Webb' },
  { key: '4', value: 'Tom Cook' },
  { key: '5', value: 'Tanya Fox' },
  { key: '6', value: 'Hellen Schmidt' },
])
</script>
