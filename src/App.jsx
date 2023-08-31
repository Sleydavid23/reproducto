import React, { useState } from 'react';
import './App.css';

const songs = [
  {
    name: 'Gitana',
    url: 'https://www.youtube.com/watch?v=eOU5B7sttHw&list=RDeOU5B7sttHw&start_radio=1'
  },
  {
    name: 'Conciencia',
    src:'./canacion/cancion1.mp3'
  },
  // Agrega más canciones aquí
];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className="App">
      <h1>Reproductor de Audio</h1>
      <audio controls autoPlay={isPlaying} src={songs[currentSongIndex].url}>
        <source src={songs[currentSongIndex].url} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div className="controls">
        <button onClick={prevSongHandler}>Anterior</button>
        <button onClick={playPauseHandler}>{isPlaying ? 'Pausa' : 'Play'}</button>
        <button onClick={nextSongHandler}>Siguiente</button>
      </div>
      <p>{songs[currentSongIndex].name}</p>
    </div>
  );
}

export default App;

