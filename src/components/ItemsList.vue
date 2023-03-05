<script lang="ts">
import { defineComponent } from 'vue';
import { BoardGameMock } from "@/mock-data/board-game.mock";
import type { BoardGame } from "@/types/types";
import BoardGameItem from "./BoardGameItem.vue";

export default defineComponent({
  name: 'ItemsList',
  components: { BoardGameItem },
  data(): { boardGamesList: Array<BoardGame> } {
    return {
      boardGamesList: [BoardGameMock, BoardGameMock, BoardGameMock],
    };
  },
  methods: {
    itemClick(event: Event) {
      console.log(event);
    },
  },
  provide() {
    return {
      boardGamesAmount: this.boardGamesList.length,
    };
  },
});
</script>

<template>
  <div class="green">Items List</div>

  <ul class="bg-list">
    <li class="bg-list__item" v-for="boardGame of boardGamesList" :key="boardGame.id">
      <BoardGameItem :board-game="boardGame"></BoardGameItem>
      <a @click="itemClick">{{ boardGame.title }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.bg-list {
  display: flex;
  list-style: none;
}

.green {
  color: green;
}
</style>
