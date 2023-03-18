<script lang="ts">
import { defineComponent } from 'vue';
import { BoardGameMock, BoardGameMock2, BoardGameMock3 } from '@/mock-data/board-game.mock';
import type { BoardGame, SelectOption } from '@/types/types';
import BoardGameItem from './BoardGameItem.vue';
import BgSelect from './ui/BGSelect.vue';
import TextInput from './ui/TextInput.vue';

export default defineComponent({
  name: 'ItemsList',
  components: { TextInput, BgSelect, BoardGameItem },
  data(): {
    boardGamesList: Array<BoardGame>;
    selectedSort: string;
    searchQuery: string;
    sortOptions: Array<SelectOption>;
  } {
    return {
      boardGamesList: [BoardGameMock, BoardGameMock2, BoardGameMock3],
      selectedSort: 'saleStatus',
      searchQuery: '',
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
  computed: {
    sortedBoardGames() {
      return [...this.boardGamesList].sort((item1, item2) => {
        return (item1[this.selectedSort as keyof BoardGame] as string)?.localeCompare(
          item2[this.selectedSort as keyof BoardGame] as string
        );
      });
    },
    sortedAndFilteredBoardGames() {
      return this.sortedBoardGames.filter(boardGame =>
        boardGame.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    selectedSort(newValue: string) {
      this.boardGamesList.sort((item1, item2) => {
        return (item1[newValue as keyof BoardGame] as string)?.localeCompare(
          item2[newValue as keyof BoardGame] as string
        );
      });
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
      <transition-group name="bg-list">
        <BoardGameItem :board-game="boardGame" :key="boardGame.id" @click="itemClick"></BoardGameItem>
      </transition-group>
    </li>
  </ul>

  <div class="computed-list-container">
    <h3>Computed list</h3>
    <div class="search-panel">
      <TextInput v-model="searchQuery" :placeholder="'Search...'"></TextInput>
    </div>

    <ul class="short-list">
      <transition-group name="short-bg-list">
        <li class="short-list-item" v-for="boardGame of sortedAndFilteredBoardGames" :key="boardGame.id">
          {{ boardGame.title }} - {{ boardGame.id }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.bg-list {
  display: flex;
  list-style: none;
}

.green {
  color: green;
}

.computed-list-container {
  margin-top: 80px;
}

.short-bg-list-item {
  display: inline-block;
  margin-right: 10px;
}

.short-bg-list-enter-active,
.short-bg-list-leave-active {
  transition: all 0.5s ease;
}

.short-bg-list-enter-from,
.short-bg-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.bg-list-move,
.short-bg-list-move {
  transition: transform 0.5s ease;
}
</style>
