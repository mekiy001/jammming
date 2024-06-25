import React from 'react';

function Track({name, artist, album, addSong, track, playlist, removeSong}) {

    const handleClick = () => {
        addSong(track);
    }

    const handleClickRemove = () => {
        removeSong(track);
    }

    if (playlist) {
        return(
            <div>
                <h3>{name}</h3>
                <span>{artist} | {album}</span>
                <button onClick={handleClickRemove}>-</button>
            </div>
        );
    }

    return(
        <div>
            <h3>{name}</h3>
            <span>{artist} | {album}</span>
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default Track;