import React from 'react';
import Track from './track';
import Styles from '../styles/tracklist.module.css';

function TrackList({response, addSong}) {
    if (response.length > 0) {
        return(
            <div className={Styles.tracklist}>
                <h1>Results</h1>
                {response[0].map((track) => {
                    return(
                        <Track 
                          name={track.name}
                          artist={track.artist}
                          album={track.album}
                          addSong={addSong}
                          track={track}
                          playlist={false}
                        />
                    )
                })}
            </div>
        );
    }

    return(
        <h1 className={Styles.tracklist}>Results</h1>
    );
}

export default TrackList;