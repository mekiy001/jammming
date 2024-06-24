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

  return (
  <div>
    <h1 className={styles.header}>Jamming</h1>
    <Search onResponse={setResponse}/>
    <div className={styles.flex}>
      <TrackList response={response} addSong={addSong}/>
      <Playlist playlist={playlist}/>
    </div>
  </div>
  );
}

export default App;
