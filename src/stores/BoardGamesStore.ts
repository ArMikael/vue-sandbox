import { defineStore } from 'pinia';
import type { BoardGame } from '@/types/types';
import axios from 'axios';

type BoardGamesStoreState = {
  boardGamesList: Array<BoardGame>;
  isFavorite: boolean;
  isLoading: boolean;
  sortType: string;
};

export const useBoardGamesStore = defineStore('boardGamesStore', {
  state: (): BoardGamesStoreState => ({
    boardGamesList: [],
    isFavorite: false,
    isLoading: false,
    sortType: 'saleStatus',
  }),
  getters: {
    sortedBoardGames(): Array<BoardGame> {
      return [...this.boardGamesList].sort((item1, item2) => {
        return (item1[this.sortType as keyof BoardGame] as string)?.localeCompare(
          item2[this.sortType as keyof BoardGame] as string
        );
      });
    },
  },
  actions: {
    async getBoardGames() {
      this.isLoading = true;
      const response = await axios.get('http://localhost:3000/boardGames', {});
      this.boardGamesList = response.data;
      this.isLoading = false;
    },
    async deleteBoardGame(id: string) {
      this.boardGamesList = this.boardGamesList.filter(bg => bg.id !== id);

      const response = await axios.delete('http://localhost:3000/boardGames/' + id);
      if (response.data.error) console.error('deleteBoardGame error: ', response.data.error);
    },
    setSortType(sortType: string) {
      this.sortType = sortType;
    },
    toggleFavorite(id: string) {
      const boardGame = this.boardGamesList.find(bg => bg.id === id);
      boardGame!.isFavorite = !boardGame?.isFavorite;
    },
  },
});
