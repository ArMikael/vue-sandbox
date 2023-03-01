<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  created: () => {
    // this.formCreated();
    console.log('created');
  },
  methods: {
    formCreated() {
      console.log('Form was created');
    },
  },
});
</script>

<template>
  <h2>Main Form Component</h2>
  <form>
    <input type="text" placeholder="Place enter text" />

    <v-autocomplete
      clearable
      label="Autocomplete"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      multiple
    >
    </v-autocomplete>
  </form>
</template>
