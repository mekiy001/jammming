import React from 'react';
import Track from './track'

function TrackList({response}) {
    if (response.length > 0) {
        return(
            <div>
                <h1>Results</h1>
                {response[0].map(track => {
                    return(
                        <Track 
                          name={track.name}
                          artist={track.artist}
                          album={track.album}
                        />
                    )
                })}
            </div>
        );
    }

    return(
        <h1>Results</h1>
    );
}

export default TrackList;