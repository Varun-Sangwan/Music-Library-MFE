import { render, screen, fireEvent } from "@testing-library/react";
import MusicLibrary from "../MusicLibrary";
import songs from "../data/songs";
import { songsListToDisplay } from "../MusicLibrary.logic";
import { vi } from "vitest";

vi.mock("../MusicLibrary.logic", () => ({
  songsListToDisplay: vi.fn(),
}));

describe("MusicLibrary Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Music Library title", () => {
    (songsListToDisplay as jest.Mock).mockReturnValue({ All: songs });

    render(<MusicLibrary />);

    expect(screen.getByText("Music Library")).toBeInTheDocument();
  });

  it("updates filter when typing in the search input", () => {
    (songsListToDisplay as jest.Mock).mockReturnValue({ All: songs });

    render(<MusicLibrary />);

    const searchInput = screen.getByPlaceholderText(
      "Search by title, artist, album..."
    );

    fireEvent.change(searchInput, { target: { value: "Beatles" } });

    expect(searchInput).toHaveValue("Beatles");
  });

  it("displays filtered and sorted songs when selections change", () => {
    const filteredSongs = {
      All: [{ id: 1, title: "Song A", artist: "Artist X", album: "Album 1" }],
    };

    (songsListToDisplay as jest.Mock).mockReturnValue(filteredSongs);

    render(<MusicLibrary />);

    expect(screen.getByText("Song A")).toBeInTheDocument();
    expect(screen.queryByText("Song B")).not.toBeInTheDocument();
  });

  it("displays grouped songs correctly", () => {
    const groupedSongs = {
      "Album 1": [
        { id: 1, title: "Song A", artist: "Artist X", album: "Album 1" },
        { id: 2, title: "Song C", artist: "Artist Y", album: "Album 1" },
      ],
    };

    (songsListToDisplay as jest.Mock).mockReturnValue(groupedSongs);

    render(<MusicLibrary />);

    expect(screen.getByText("Album 1")).toBeInTheDocument();
    expect(screen.getByText("Song A")).toBeInTheDocument();
    expect(screen.getByText("Song C")).toBeInTheDocument();
  });

  it("updates sorting when selecting an option", () => {
    (songsListToDisplay as jest.Mock).mockReturnValue({ All: [] });

    render(<MusicLibrary />);

    const sortSelect = screen.getByTestId("sort-select");
    fireEvent.change(sortSelect, { target: { value: "artist" } });

    expect(sortSelect).toHaveValue("artist");
  });

  it("updates grouping when selecting an option", () => {
    (songsListToDisplay as jest.Mock).mockReturnValue({ All: [] });

    render(<MusicLibrary />);

    const groupSelect = screen.getByTestId("group-select");
    fireEvent.change(groupSelect, { target: { value: "album" } });

    expect(groupSelect).toHaveValue("album");
  });
});
