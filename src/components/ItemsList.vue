<script lang="ts">
import { defineComponent } from 'vue';
import { BoardGameMock, BoardGameMock2 } from '@/mock-data/board-game.mock';
import type { BoardGame, SelectOption } from '@/types/types';
import BoardGameItem from './BoardGameItem.vue';
import BgSelect from './ui/BGSelect.vue';

export default defineComponent({
  name: 'ItemsList',
  components: { BgSelect, BoardGameItem },
  data(): {
    boardGamesList: Array<BoardGame>;
    selectedSort: string;
    sortOptions: Array<SelectOption>;
  } {
    return {
      boardGamesList: [BoardGameMock, BoardGameMock2, BoardGameMock],
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'Title' },
        { value: 'saleStatus', name: 'Status' },
      ],
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

  <div class="sort-panel">
    <bg-select v-model="selectedSort" :options-list="sortOptions"></bg-select>
  </div>

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
