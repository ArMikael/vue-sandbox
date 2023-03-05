import type { BoardGameSaleStatus } from './enums';

export type BoardGame = {
  artists: Array<string>;
  coverImage: string;
  description: string;
  designers: Array<string>;
  id: string;
  images: Array<string>;
  publisher: string;
  publishedAt: string;
  slogan?: string;
  saleStatus: BoardGameSaleStatus;
  title: string;
};

export type BGGBoardGame = BoardGame & {
  averageRating: number;
  bggId: string;
  complexityWeight: number;
  playingTimeMin: number;
  playingTimeMax: number;
  ratingsAmount: number;
};
