<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { BoardGame } from '@/types/types';

export default defineComponent({
  name: 'BoardGameItem',
  inject: ['boardGamesAmount'],
  data(): { totalAmount: Function } {
    return {
      totalAmount: this.boardGamesAmount,
    };
  },
  mounted() {
    console.log('boardGame: ', this.boardGame);
  },
  props: {
    boardGame: {
      type: Object as PropType<BoardGame>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="board-game-item">
    <div class="board-game-item-cover">
      <h2 class="board-game-item-title">
        {{ boardGame.title }}
      </h2>

      <img
        class="board-game-item-cover-image"
        alt="{{ boardGame.title }}"
        :src="'src/assets/images/covers/' + boardGame.coverImage" />

      <div class="board-game-designer">
        <span class="board-game-item-designer" v-for="(designer, index) of boardGame.designers" :key="designer">
          {{ designer }}<span v-if="index !== Object.keys(boardGame.designers).length - 1">, </span>
        </span>
      </div>
      <div>{{ boardGame.publishedAt }}</div>
      <div class="board-game-item-cover-label"></div>
    </div>
  </div>
</template>

<style scoped>
.board-game-item-cover-image {
  max-width: 100%;
  max-height: 250px;
  margin-left: auto;
  margin-right: auto;
}
</style>
