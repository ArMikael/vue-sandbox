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
    console.log('boardGame: ', this.boardGame);
  },
  props: ['boardGame']
});
</script>

<template>
  <div class="board-game">
    <div class="board-game-cover">
      <div class="board-gamer-cover-label"></div>
      <img class="board-game-cover-image"
           alt="{{this.boardGame}}"
           src=""
      />
    </div>
  </div>

  <div>{{ totalAmount }}</div>
</template>

<style scoped></style>
