export type SortBy = "title" | "artist" | "album";

export type GroupBy = "none" | "artist" | "album";

export interface UserSelectionState {
  filter: string;
  sortBy: SortBy;
  groupBy: GroupBy;
}

export type SongsType = {
  id: number;
  title: string;
  artist: string;
  album: string;
  image: string;
};
