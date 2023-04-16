import { defineStore } from 'pinia';
import { BoardGameMock, BoardGameMock2, BoardGameMock3 } from '@/mock-data/board-game.mock';
import type { BoardGame } from '@/types/types';

type BoardGamesStoreState = {
  boardGamesList: Array<BoardGame>;
  isFavorite: boolean;
};

export const useBoardGamesStore = defineStore('boardGamesStore', {
  state: (): BoardGamesStoreState => ({
    isFavorite: false,
    boardGamesList: [BoardGameMock, BoardGameMock2, BoardGameMock3],
  }),
  getters: {},
  actions: {
    toggleFavorite(id: string) {
      const boardGame = this.boardGamesList.find(bg => bg.id === id);
      boardGame!.isFavorite = !boardGame?.isFavorite;
    },
  },
});
