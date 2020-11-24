import React from 'react'
import './SongRow.css';

export const SongRow = ({track,playSong}) => {
    return (
        <div className="songRow" onClick={()=>{playSong(track)}}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div class="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=>artist.name)}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}
