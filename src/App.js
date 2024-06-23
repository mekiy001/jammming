import styles from './styles/app.module.css';
import Search from './components/search';
import TrackList from './components/tracklist';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState([]);

  return (
  <div>
    <h1 className={styles.header}>Jamming</h1>
    <Search onResponse={setResponse}/>
    <div className={styles.flex}>
      <TrackList response={response}/>
      <h1>Components</h1>
    </div>
  </div>
  );
}

export default App;
