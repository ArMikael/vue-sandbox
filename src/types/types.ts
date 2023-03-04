export type BoardGameItem = {
  artists: Array<string>;
  coverImage: string;
  description: string;
  designers: Array<string>;
  id: string;
  images: Array<string>;
  publisher: string;
  publishedAt: string;
  slogan?: string;
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
