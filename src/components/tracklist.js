import React from 'react';

function TrackList(props) {
    const data = props.track;

    // function addPlaylist(index) {
    //     // console.log(data[index].name);
    //     // console.log(data[index].artist);
    //     // console.log(data[index].album);
    // }

    return(
        <div>
            <h1>Results</h1>
            {data.map((song, index) => (
                <div key={index}>
                    <span>{song.name}</span>
                    <span>{song.artist}</span>
                    <span>{song.album}</span>
                    {/* <button onClick={addPlaylist(index)}>+</button> */}
                    <button>+</button>
                </div>
            ))}
        </div>
    );
}

export default TrackList;