import styles from './styles/app.module.css';
import Search from './components/search';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const setResponse = response => setData(response);

  return (
  <div>
    <h1 className={styles.header}>Jamming</h1>
    <Search onResponse={setResponse}/>
    <div className={styles.flex}>
      <h1>Components</h1>
    </div>
  </div>
  );
}

export default App;
