<script lang="ts">
import { defineComponent } from 'vue';
import { BoardGameMock } from "@/mock-data/board-game.mock";
import type { BoardGameItem } from "@/types/types";
import BoardGame from "@/components/BoardGame.vue";

export default defineComponent({
  name: 'ItemsList',
  components: { BoardGame },
  data(): { boardGamesList: Array<BoardGameItem> } {
    return {
      boardGamesList: [BoardGameMock, 'Item 2', 'Item 3'],
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

  <ul class="list">
    <li class="list__item" v-for="item of boardGamesList" :key="item">
      <BoardGame board-game="item"></BoardGame>
      <a @click="itemClick">{{ item }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.green {
  color: green;
}
</style>
