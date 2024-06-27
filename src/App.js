import styles from './styles/app.module.css';
import Search from './components/search';
import TrackList from './components/tracklist';
import Playlist from './components/playlist';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addSong = (track) => {
    setPlaylist((prev) => {
      const check = prev.some((element) => element.id === track.id);

      if (check) {
        return prev;
      }

      return [track, ...prev];
    });
  }

  const removeSong = (track) => {
    setPlaylist((prev) => {
      return prev.filter((element) => element.id !== track.id);
    });
  }

  if (response.length === 0) {
    return (
      <div className={styles.appB}>
        <h1 className={styles.header}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        <Search onResponse={setResponse}/>
        <div className={styles.flex}>
          <TrackList response={response} addSong={addSong}/>
          <Playlist playlist={playlist} removeSong={removeSong}/>
        </div>
      </div>
      );
  }

  return (
  <div className={styles.appA}>
    <h1 className={styles.header}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
    <Search onResponse={setResponse}/>
    <div className={styles.flex}>
      <TrackList response={response} addSong={addSong}/>
      <Playlist playlist={playlist} removeSong={removeSong}/>
    </div>
  </div>
  );
}

export default App;
