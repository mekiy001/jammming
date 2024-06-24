import React from 'react';
import Track from './track';

function Playlist({playlist}) {
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
                        />
                    )
                })}
            <button>Save to Spotify</button>
        </div>
    );
};

export default Playlist;