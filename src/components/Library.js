import React from "react";
import LibrarySongs from "./LibrarySongs";

function Library({ songs, setCurrentSong }) {
  return (
    <div className="library">
      <h2>Libary</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySongs
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
