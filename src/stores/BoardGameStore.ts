import { defineStore } from 'pinia';
import type { BoardGame } from '@/types/types';
import axios from 'axios';
import { BoardGameMock, BoardGameMock2, BoardGameMock3 } from '@/mock-data/board-game.mock';

type BoardGameStoreState = {
  boardGamesList: Array<BoardGame>;
  isFavorite: boolean;
  isLoading: boolean;
  sortType: string;
};

export const baseUrl = 'http://localhost:3000/boardGames';

export const useBoardGameStore = defineStore('boardGamesStore', {
  state: (): BoardGameStoreState => ({
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
    getBoardGames() {
      this.isLoading = true;
      this.boardGamesList = [BoardGameMock, BoardGameMock2, BoardGameMock3];
    },
    async deleteBoardGame(id: string) {
      this.boardGamesList = this.boardGamesList.filter(bg => bg.id !== id);

      const response = await axios.delete(baseUrl + '/' + id);
      if (response.data.error) console.error('deleteBoardGame error: ', response.data.error);
    },
    setSortType(sortType: string) {
      this.sortType = sortType;
    },
    async toggleFavorite(id: string) {
      const boardGame = this.boardGamesList.find(bg => bg.id === id);
      boardGame!.isFavorite = !boardGame?.isFavorite;

      const response = await axios.patch(baseUrl + '/' + id, {
        isFavorite: boardGame!.isFavorite,
      });

      if (response.data.error) console.error('deleteBoardGame error: ', response.data.error);
    },
  },
});
