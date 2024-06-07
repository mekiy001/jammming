import styles from './styles/app.module.css';
import Search from './components/search';

function App() {
  return (
  <div>
    <h1 className={styles.header}>Jamming</h1>
    <Search/>
    <div className={styles.flex}>
      <h1>Components</h1>
    </div>
  </div>
  );
}

export default App;
