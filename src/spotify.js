let accessToken = '';

const Spotify = {
    token() {
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');    
            
            return this.getAccessToken();
        }

        return this.getAccessToken();
    },
    getAccessToken () {
        return accessToken;
    }
}

export default Spotify;