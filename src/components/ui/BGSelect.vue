<template>
  <select v-model="modelValue" @change="changeOption">
    <option
      v-for="option in optionsList"
      :key="option.value"
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "bg-select",
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>

</style>