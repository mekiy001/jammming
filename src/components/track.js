import React from 'react';

function Track({name, artist, album}) {
    return(
        <div>
            <h3>{name}</h3>
            <h3>{artist} | {album}</h3>
        </div>
    );
}

export default Track;