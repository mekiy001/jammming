import React from 'react';
import styles from '../styles/search.module.css';

function Search(props) {
    const exampleData = [{"name": "In da Club", "artist": "50 Cent", "album": "Get Rich or Die Tryin"}, 
    {"name": "Without Me", "artist": "Eminem", "album": "The Eminem Show"} ];
    
    // props.onResponse(exampleData);
    
    return(
        <div>
            <input type='text' className={styles.center}/>
            <button className={styles.center}>SEARCH</button>
        </div>
    );
}

export default Search;