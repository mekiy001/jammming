import React, { useState, useEffect } from 'react';
import styles from '../styles/search.module.css';

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

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');            
        }

        if (accessToken) {
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
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=drake`, { // update with ${term}
            headers: {
              Authorization: 'Bearer ' + accessToken
            }
        });
    
        const dataR = await response.json();

        onResponse((prev) => {
            return [dataR.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                ur: track.uri
            })), ...prev]
        });
    }
    
    return(
        <div>
            <input type='text' className={styles.center} onChange={handleChange}/>
            <button className={styles.center} onClick={handleClick}>SEARCH</button>
        </div>
    );
}

export default Search;