import React from "react";
import LibrarySongs from "./LibrarySongs";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Libary</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySongs song={song} />;
        })}
      </div>
    </div>
  );
}

export default Library;
