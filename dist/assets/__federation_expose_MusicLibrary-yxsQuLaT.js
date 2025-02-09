import { importShared } from './__federation_fn_import-E2oZnxVw.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const songs = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 2,
    title: "Love of My Life",
    artist: "Queen",
    album: "A Night at the Opera",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 3,
    title: "You're My Best Friend",
    artist: "Queen",
    album: "A Night at the Opera",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 4,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
  },
  {
    id: 5,
    title: "Black Dog",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
  },
  {
    id: 6,
    title: "Rock and Roll",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    image: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
  },
  {
    id: 7,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 8,
    title: "New Kid in Town",
    artist: "Eagles",
    album: "Hotel California",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 9,
    title: "Life in the Fast Lane",
    artist: "Eagles",
    album: "Hotel California",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 10,
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 11,
    title: "Hey Jude",
    artist: "The Beatles",
    album: "The Beatles",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 12,
    title: "Come Together",
    artist: "The Beatles",
    album: "Abbey Road",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 13,
    title: "Something",
    artist: "The Beatles",
    album: "Abbey Road",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 14,
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
  },
  {
    id: 15,
    title: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
  },
  {
    id: 16,
    title: "Beat It",
    artist: "Michael Jackson",
    album: "Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
  },
  {
    id: 17,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
  },
  {
    id: 18,
    title: "Come as You Are",
    artist: "Nirvana",
    album: "Nevermind",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
  },
  {
    id: 19,
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
  },
  {
    id: 20,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
  },
  {
    id: 21,
    title: "Lose Yourself",
    artist: "Eminem",
    album: "8 Mile Soundtrack",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"
  },
  {
    id: 22,
    title: "Without Me",
    artist: "Eminem",
    album: "The Eminem Show",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"
  },
  {
    id: 23,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  },
  {
    id: 24,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
  }
];

const songsListToDisplay = (songs, userSelections) => {
  const { filter, sortBy, groupBy } = userSelections;
  const filteredSongs = filter !== "" ? songs.filter(
    (song) => song.title.toLowerCase().includes(filter.toLowerCase()) || song.artist.toLowerCase().includes(filter.toLowerCase()) || song.album.toLowerCase().includes(filter.toLowerCase())
  ) : songs;
  const sortedSongs = [...filteredSongs].sort(
    (a, b) => a[sortBy].localeCompare(b[sortBy])
  );
  const groupedSongs = groupBy !== "none" ? sortedSongs.reduce((acc, song) => {
    const key = song[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(song);
    return acc;
  }, {}) : { All: sortedSongs };
  return groupedSongs;
};

const {useMemo,useState} = await importShared('react');
const MusicLibrary = () => {
  const [userSelections, setUserSelections] = useState({
    filter: "",
    sortBy: "title",
    groupBy: "none"
  });
  const songsToDisplay = useMemo(
    () => songsListToDisplay(songs, userSelections),
    [userSelections]
  );
  console.log({ songsToDisplay });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "music-library-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "music-library-title", children: "Music Library" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search by title, artist, album...",
        value: userSelections.filter,
        onChange: (e) => setUserSelections({ ...userSelections, filter: e.target.value }),
        "data-testid": "filter-input",
        className: "search-bar"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-controls", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          onChange: (e) => setUserSelections({
            ...userSelections,
            sortBy: e.target.value
          }),
          "data-testid": "sort-select",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "title", children: "Sort by Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "artist", children: "Sort by Artist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "album", children: "Sort by Album" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          onChange: (e) => setUserSelections({
            ...userSelections,
            groupBy: e.target.value
          }),
          "data-testid": "group-select",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "All" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "artist", children: "Group by Artist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "album", children: "Group by Album" })
          ]
        }
      )
    ] }),
    songsToDisplay?.All ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "song-list", children: songsToDisplay?.All.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "song-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.image, alt: song.album, className: "song-image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "song-title", children: song.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "song-details", children: [
        song.artist,
        " (",
        song.album,
        ")"
      ] })
    ] }, song.id)) }) : Object.entries(songsToDisplay).map(([group, songs2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "song-group", children: group }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "song-list", children: songs2.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "song-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: song.image,
            alt: song.album,
            className: "song-image"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "song-title", children: song.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "song-details", children: [
          song.artist,
          " (",
          song.album,
          ")"
        ] })
      ] }, song.id)) })
    ] }))
  ] });
};

export { MusicLibrary as default, jsxRuntimeExports as j };
