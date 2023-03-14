<script lang="ts">
import { defineComponent } from 'vue';
import ItemsList from '@/components/ItemsList.vue';

export default defineComponent({
  components: { ItemsList },
});
</script>

<template>
  <main>
    <ItemsList></ItemsList>
  </main>
</template>
