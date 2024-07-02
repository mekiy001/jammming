import React, { useState, useEffect } from 'react';
import styles from '../styles/search.module.css';
import Spotify from '../spotify';

function Search({onResponse}) {
    const [url, setUrl] = useState('');

    const clientId = 'client_id=20a3574a8794489bae4d74c03e7a67d3';
    const responseType = 'response_type=token';
    const redirectUri = 'redirect_uri=http://localhost:3000/';
    const scope = 'scope=playlist-modify-public';

    var accessToken = '';

    const [term, setTerm] = useState('');

    var data;

    useEffect(() => {
        data = localStorage.getItem('term');
    }, []);

    useEffect(() => {
        if (url) {
            window.location.href = url;
        }

        if (Spotify.token()) {
            getSearch();
        }

        localStorage.setItem('term', term);
    }, [url, term]);

    const handleClick = () => {
        setUrl('https://accounts.spotify.com/authorize' + '?' + clientId + '&' + responseType + '&' + redirectUri + '&' + scope);
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const getSearch = async () => {
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${data}`, {
            headers: {
              Authorization: 'Bearer ' + Spotify.getAccessToken()
            }
        });
    
        const dataR = await response.json();

        onResponse((prev) => {
            return [dataR.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            })), ...prev]
        });
    }
    
    return(
        <div className={styles.div}>
            <input type='text' className={styles.input} onChange={handleChange}/>
            <button className={styles.button} onClick={handleClick}>SEARCH</button>
        </div>
    );
}

export default Search;