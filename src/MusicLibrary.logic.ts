import { SongsType, UserSelectionState } from "./MusicLibrary.types";

export const songsListToDisplay = (
  songs: SongsType[],
  userSelections: UserSelectionState
) => {
  const { filter, sortBy, groupBy } = userSelections;

  // Filter songs
  const filteredSongs =
    filter !== ""
      ? songs.filter(
          (song) =>
            song.title.toLowerCase().includes(filter.toLowerCase()) ||
            song.artist.toLowerCase().includes(filter.toLowerCase()) ||
            song.album.toLowerCase().includes(filter.toLowerCase())
        )
      : songs;

  // Sort songs
  const sortedSongs = [...filteredSongs].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  // Group songs
  const groupedSongs =
    groupBy !== "none"
      ? sortedSongs.reduce((acc, song) => {
          const key = song[groupBy];
          if (!acc[key]) acc[key] = [];
          acc[key].push(song);
          return acc;
        }, {} as Record<string, typeof songs>)
      : { All: sortedSongs };

  return groupedSongs;
};
