export enum genre {
  'pop',
  'rap',
  'hip-hop',
  'alternative',
  'rock'
}

export interface Song {
  id: number;
  name: string;
  artist: string;
  genre: genre;
  coverUrl: string;
  releaseData: number;
}
