import React, { useMemo, useState } from "react";
import songs from "./data/songs";
import { GroupBy, SortBy, UserSelectionState } from "./MusicLibrary.types";
import { songsListToDisplay } from "./MusicLibrary.logic";
import "./index.css";

const MusicLibrary: React.FC = () => {
  const [userSelections, setUserSelections] = useState<UserSelectionState>({
    filter: "",
    sortBy: "title",
    groupBy: "none",
  });

  const songsToDisplay = useMemo(
    () => songsListToDisplay(songs, userSelections),
    [userSelections]
  );

  console.log({ songsToDisplay });
  return (
    <div className="music-library-container">
      <h1 className="music-library-title">Music Library</h1>
      <input
        type="text"
        placeholder="Search by title, artist, album..."
        value={userSelections.filter}
        onChange={(e) =>
          setUserSelections({ ...userSelections, filter: e.target.value })
        }
        data-testid="filter-input"
        className="search-bar"
      />
      <div className="filter-controls">
        <select
          onChange={(e) =>
            setUserSelections({
              ...userSelections,
              sortBy: e.target.value as SortBy,
            })
          }
          data-testid="sort-select"
        >
          <option value="title">Sort by Title</option>
          <option value="artist">Sort by Artist</option>
          <option value="album">Sort by Album</option>
        </select>

        <select
          onChange={(e) =>
            setUserSelections({
              ...userSelections,
              groupBy: e.target.value as GroupBy,
            })
          }
          data-testid="group-select"
        >
          <option value="none">No Grouping</option>
          <option value="artist">Group by Artist</option>
          <option value="album">Group by Album</option>
        </select>
      </div>
      {songsToDisplay?.All ? (
        <div className="song-list">
          {songsToDisplay?.All.map((song) => (
            <div key={song.id} className="song-card">
              <img src={song.image} alt={song.album} className="song-image" />
              <p className="song-title">{song.title}</p>
              <p className="song-details">
                {song.artist} ({song.album})
              </p>
            </div>
          ))}
        </div>
      ) : (
        Object.entries(songsToDisplay).map(([group, songs]) => (
          <>
            <h2 className="song-group">{group}</h2>
            <div className={"song-list"}>
              {songs.map((song) => (
                <div key={song.id} className="song-card">
                  <img
                    src={song.image}
                    alt={song.album}
                    className="song-image"
                  />
                  <p className="song-title">{song.title}</p>
                  <p className="song-details">
                    {song.artist} ({song.album})
                  </p>
                </div>
              ))}
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default MusicLibrary;
