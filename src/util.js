export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromisse = audioRef.current.play();
    if (playPromisse !== undefined) {
      playPromisse.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
