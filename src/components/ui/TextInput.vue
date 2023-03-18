<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'TextInput',
  data() {
    return {
      modelValue: this.searchQuery,
    };
  },
  props: {
    placeholder: {
      type: String,
    },
    searchQuery: {
      type: Object as PropType<string>,
    },
  },
  methods: {
    inputChanged(event: Event) {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('update:modelValue', eventTarget?.value);
    },
  },
});
</script>

<template>
  <div class="text-input">
    <input type="text" v-model="modelValue" @input="inputChanged" :placeholder="this.placeholder" />
  </div>
</template>

<style lang="scss"></style>
