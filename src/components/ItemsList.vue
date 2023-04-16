<script lang="ts">
import { defineComponent } from 'vue';
import type { BoardGame, SelectOption } from '@/types/types';
import BoardGameItem from './BoardGameItem.vue';
import BgSelect from './ui/BGSelect.vue';
import TextInput from './ui/TextInput.vue';
import { useBoardGamesStore } from '@/stores/BoardGamesStore';

export default defineComponent({
  name: 'ItemsList',
  components: { TextInput, BgSelect, BoardGameItem },
  setup() {
    const boardGamesStore = useBoardGamesStore();
    boardGamesStore.getBoardGames();
    return { boardGamesStore };
  },
  data(): {
    selectedSort: string;
    searchQuery: string;
    sortOptions: Array<SelectOption>;
  } {
    return {
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
    sortedAndFilteredBoardGames() {
      return this.boardGamesStore.sortedBoardGames.filter(boardGame =>
        boardGame.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    selectedSort(newValue: string) {
      this.boardGamesStore.boardGamesList.sort((item1, item2) => {
        return (item1[newValue as keyof BoardGame] as string)?.localeCompare(
          item2[newValue as keyof BoardGame] as string
        );
      });
    },
  },
  provide() {
    return {
      boardGamesAmount: this.boardGamesStore.boardGamesList.length,
    };
  },
});
</script>

<template>
  <div class="green">Items List</div>

  <div class="sort-panel">
    <bg-select
      v-model="selectedSort"
      :options-list="sortOptions"
      @change="boardGamesStore.setSortType(selectedSort)"></bg-select>
  </div>

  <ul class="bg-list">
    <li class="bg-list__item" v-for="boardGame of boardGamesStore.boardGamesList" :key="boardGame.id">
      <transition-group name="bg-list">
        <BoardGameItem :board-game="boardGame" :key="boardGame.id" @click="itemClick"></BoardGameItem>
      </transition-group>
    </li>
  </ul>

  <div class="computed-list-container">
    <h3>Computed list</h3>
    <div class="search-panel">
      <TextInput v-model="searchQuery" v-focus :placeholder="'Search...'"></TextInput>
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
