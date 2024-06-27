import React from 'react';
import Track from './track';
import Styles from '../styles/playlist.module.css';

function Playlist({playlist, removeSong}) {
    return(
        <div className={Styles.playlist}>
            <input type='text' className={Styles.input}/>
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
            <button className={Styles.button}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;