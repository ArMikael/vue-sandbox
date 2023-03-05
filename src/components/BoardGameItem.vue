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

      <div class="board-game-cover-container">
        <div class="board-game-item-cover-status">
          {{ boardGame.saleStatus }}
        </div>
        <img
          v-if="boardGame.coverImage"
          class="board-game-item-cover-image"
          :alt="boardGame.title"
          :src="'src/assets/images/covers/' + boardGame.coverImage" />

        <div v-else class="image-empty-state">
            No image
        </div>
      </div>

      <div class="board-game-designer">
        <span class="board-game-item-designer" v-for="(designer, index) of boardGame.designers" :key="designer">
          {{ designer }}<span v-if="index !== Object.keys(boardGame.designers).length - 1">, </span>
        </span>
      </div>
      <div>{{ boardGame.publishedAt }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.board-game-cover-container {
  position: relative;
  display: flex;
  width: 250px;
  height: 250px;

  .board-game-item-cover-status {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 14px 8px;
    background-color: gold;
    border-radius: 6px;
    z-index: 2;
    color: black;
  }

  .board-game-item-cover-image {
    max-width: 100%;
    max-height: 250px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
