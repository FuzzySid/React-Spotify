import React,{useState, useEffect, useRef} from 'react'
import './Footer.css';
import { useDataLayerValue } from '../contexts/DataLayer';

export const Footer = () => {
    const audioRef=useRef();
    const [{item,playing},dispatch]=useDataLayerValue();
    const [audioSource,setAudioSource]=useState('')
    useEffect(()=>{
        if(item)
        setAudioSource(item.preview_url);
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    },[item])

    return (
        <div className="footer">
            <div class="footer__left">
                {
                    item && <img
                    className="footer__albumLogo"
                    src={item.album.images[0].url}
                    alt=""
                  />
                }
            
          <div className="footer__songInfo">
              {
                  item ?
                  <>
                  <h4>{item.name}</h4>
            <p> {item.artists.map((artist)=>artist.name)}</p>
                  </>
                  :
                  <>Select a song to get started! </>
              }
            
          </div>            
          </div>
            <div class="footer__center">
                {
                    item && <>
                    <audio ref={audioRef} controls>
                   
                        <source src={audioSource}/>
                    Your browser does not support the audio tag.
                        
                    </audio>
                   
                    </>
                }
               
            </div>
            
        </div>
    )

}
