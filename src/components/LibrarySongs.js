import React from "react";

const LibrarySongs = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
  id,
}) => {
  const handleSelectedSong = () => {
    setCurrentSong(song);

    //Active state
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSong);

    if (isPlaying) {
      const playPromisse = audioRef.current.play();
      if (playPromisse !== undefined) {
        playPromisse.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    audioRef.current.play();
  };
  return (
    <div
      onClick={handleSelectedSong}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
