import { songsListToDisplay } from "../MusicLibrary.logic";
import { SongsType, UserSelectionState } from "../MusicLibrary.types";

describe("songsListToDisplay", () => {
  const sampleSongs: SongsType[] = [
    { id: 1, title: "Song A", artist: "Artist X", album: "Album 1", image: "" },
    { id: 2, title: "Song B", artist: "Artist Y", album: "Album 2", image: "" },
    { id: 3, title: "Song C", artist: "Artist X", album: "Album 1", image: "" },
    { id: 4, title: "Song D", artist: "Artist Z", album: "Album 3", image: "" },
  ];

  it("returns all songs when no filter is applied", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All).toHaveLength(sampleSongs.length);
  });

  it("filters songs based on search query", () => {
    const userSelections: UserSelectionState = {
      filter: "Artist X",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All).toHaveLength(2);
    expect(result.All.map((song) => song.artist)).toEqual([
      "Artist X",
      "Artist X",
    ]);
  });

  it("sorts songs alphabetically by title", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All.map((song) => song.title)).toEqual([
      "Song A",
      "Song B",
      "Song C",
      "Song D",
    ]);
  });

  it("sorts songs alphabetically by album", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "album",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All.map((song) => song.album)).toEqual([
      "Album 1",
      "Album 1",
      "Album 2",
      "Album 3",
    ]);
  });

  it("groups songs by album", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "album",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(Object.keys(result)).toEqual(["Album 1", "Album 2", "Album 3"]);
    expect(result["Album 1"]).toHaveLength(2);
  });

  it("groups songs by artist", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "artist",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(Object.keys(result)).toEqual(["Artist X", "Artist Y", "Artist Z"]);
    expect(result["Artist X"]).toHaveLength(2);
  });

  it("handles an empty songs list", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay([], userSelections);
    expect(result.All).toEqual([]);
  });

  it("returns an empty list when filter does not match any song", () => {
    const userSelections: UserSelectionState = {
      filter: "Nonexistent Song",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All).toEqual([]);
  });

  it("maintains correct ID association after sorting", () => {
    const userSelections: UserSelectionState = {
      filter: "",
      sortBy: "title",
      groupBy: "none",
    };

    const result = songsListToDisplay(sampleSongs, userSelections);
    expect(result.All.map((song) => song.id)).toEqual([1, 2, 3, 4]); // IDs should remain correct
  });
});
