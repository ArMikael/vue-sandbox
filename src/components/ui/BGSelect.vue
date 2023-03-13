<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Sort type</option>
    <option v-for="option in optionsList" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { SelectOption } from '@/types/types';

export default defineComponent({
  name: 'bg-select',
  props: {
    modelValue: {
      type: String,
    },
    optionsList: {
      type: Object as PropType<Array<SelectOption>>,
      // default: () => [{ value: '', name: '' }],
    },
  },
  methods: {
    changeOption(event: Event) {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('update:modelValue', eventTarget.value);
    },
  },
});
</script>

<style scoped lang="scss"></style>
