import React, { useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}></Song>
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      ></Player>
      <Library songs={songs} />
    </div>
  );
}

export default App;
