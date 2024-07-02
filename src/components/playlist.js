import React from 'react';
import Track from './track';
import Styles from '../styles/playlist.module.css';
import { useState } from 'react';
import Spotify from '../spotify';

function Playlist({playlist, removeSong, setPlaylist}) {
    const [playlistName, setPlaylistName] = useState('');

    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }

    const handleClick = async () => {
        const headers = { Authorization: 'Bearer ' + Spotify.getAccessToken() };
        const trackUris = playlist.map(track => track.uri);

        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: headers
        });

        const data = await response.json();

        const response2 = await fetch(`https://api.spotify.com/v1/users/${data.id}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: playlistName})
        });
        
        const data2 = await response2.json();

        await fetch(`https://api.spotify.com/v1/playlists/${data2.id}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({"uris": trackUris})
        });

        setPlaylistName('');
        setPlaylist([]);
    }

    return(
        <div className={Styles.playlist}>
            <input type='text' className={Styles.input} onChange={handleChange}/>
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
            <button className={Styles.button} onClick={handleClick}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;