import React from 'react';

function Track({name, artist, album, addSong, track}) {

    const handleClick = () => {
        addSong(track);
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