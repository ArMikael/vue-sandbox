<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoardGame',
  inject: ['boardGamesAmount'],
  data() {
    return {
      totalAmount: this.boardGamesAmount,
    };
  },
  mounted() {
    console.log('total amount received: ', this.totalAmount);
  },
});
</script>

<template>
  <div>{{ totalAmount }}</div>
</template>

<style scoped></style>
