<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { Ref } from 'vue';

const city: Ref = ref('');

watch(city, async (newValue, oldValue) => {
  console.log('city change: ', newValue, oldValue);
});

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <h2>Main Form Component</h2>
  <form>
    <input v-model="city" type="text" placeholder="Place enter text" />

    <v-autocomplete
      clearable
      label="Autocomplete"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      multiple>
    </v-autocomplete>
  </form>
</template>
