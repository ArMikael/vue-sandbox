import type { BoardGameSaleStatus } from './enums';

export type SelectOption = {
  value: string;
  name: string;
};

export type BoardGame = {
  artists: Array<string>;
  coverImage: string;
  description: Array<string>;
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

export type Post = {
  id: number;
  body: string;
  title: string;
  userId: number;
};
