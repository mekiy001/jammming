import React from 'react';
import Track from './track';

function Playlist({playlist, removeSong}) {
    return(
        <div>
            <input type='text'/>
            {playlist.map(track => {
                return(
                        <Track 
                          name={track.name}
                          artist={track.artist}
                          album={track.album}
                          track={track}
                          playlist={true}
                          removeSong={removeSong}
                        />
                    )
                })}
            <button>Save to Spotify</button>
        </div>
    );
};

export default Playlist;