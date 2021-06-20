import React from "react";
import LibrarySongs from "./LibrarySongs";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Libary</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySongs
              setSongs={setSongs}
              isPlaying={isPlaying}
              songs={songs}
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              id={song.id}
              audioRef={audioRef}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
