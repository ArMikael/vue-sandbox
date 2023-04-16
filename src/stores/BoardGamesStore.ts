import { defineStore } from 'pinia';
import { BoardGameMock, BoardGameMock2, BoardGameMock3 } from '@/mock-data/board-game.mock';
import type { BoardGame } from '@/types/types';

type BoardGamesStoreState = {
  boardGamesList: Array<BoardGame>;
  isFavorite: boolean;
  sortType: string;
};

export const useBoardGamesStore = defineStore('boardGamesStore', {
  state: (): BoardGamesStoreState => ({
    boardGamesList: [BoardGameMock, BoardGameMock2, BoardGameMock3],
    isFavorite: false,
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
    setSortType(sortType: string) {
      this.sortType = sortType;
    },
    toggleFavorite(id: string) {
      const boardGame = this.boardGamesList.find(bg => bg.id === id);
      boardGame!.isFavorite = !boardGame?.isFavorite;
    },
  },
});
