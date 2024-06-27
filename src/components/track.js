import React from 'react';
import Styles from '../styles/track.module.css';

function Track({name, artist, album, addSong, track, playlist, removeSong}) {

    const handleClick = () => {
        addSong(track);
    }

    const handleClickRemove = () => {
        removeSong(track);
    }

    if (playlist) {
        return(
            <div className={Styles.div}>
                <h3>{name}</h3>
                <span>{artist} | {album}</span>
                <button onClick={handleClickRemove} className={Styles.button}>-</button>
            </div>
        );
    }

    return(
        <div className={Styles.div}>
            <h3>{name}</h3>
            <span>{artist} | {album}</span>
            <button onClick={handleClick} className={Styles.button}>+</button>
        </div>
    );
}

export default Track;