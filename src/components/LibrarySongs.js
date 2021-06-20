import React from "react";

const LibrarySongs = ({ song, setCurrentSong }) => {
  const handleSelectedSong = () => {
    setCurrentSong(song);
  };
  return (
    <div onClick={handleSelectedSong} className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
