export interface Character {
  name: string;
  id: number;
  description: string;
  thumbnail: CharacterThumbnail;
}

export interface CardViewModel {
  title: string;
  description: string;
  id: number;
  index: string;
  imgURL: string;
}

export interface CharacterThumbnail {
  path: string;
  extension: string;
}
