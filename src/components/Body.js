import React from 'react'
import { useDataLayerValue } from '../contexts/DataLayer';
import './Body.css';
import { Header } from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SongRow } from './SongRow';

export const Body = ({spotify}) => {
    const [{discoverWeekly},dispatch]=useDataLayerValue();
    const playPlayList=(id)=>{
        spotify.play({
            context_uri:`spotify:playlist:1qvW13XhfMMZMlzQx362HR`
        })
          .then(res=>{
              spotify.getMyCurrentPlayingTrack().then(result=>{
                  dispatch({
                      type:'SET_ITEM',
                      item: result.item
                  });
                  dispatch({
                      type:'SET_PLAYING',
                      playing:true
                  })
              })
          })

    }
    const playSong = (track) => {
        console.log('track:',track)
            dispatch({
                    type: "SET_ITEM",
                    item: track,
                  });
            dispatch({
                    type: "SET_PLAYING",
                    playing: false,
            });
        
      };
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div class="body__info">
                <img src={discoverWeekly && discoverWeekly.images[0].url} alt=""/>
                <div class="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discoverWeekly && discoverWeekly.description}</p>
                </div>
            </div>
            <div class="body__songs">
                <div class="body__icons">
                    <PlayCircleFilledIcon onClick={playPlayList} className="body__shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {
                    discoverWeekly && discoverWeekly.tracks.items.map(item=>{
                        return(
                            <SongRow playSong={playSong} track={item.track}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
