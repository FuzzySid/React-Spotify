import React from 'react'
import './Sidebar.css';
import { SidebarOption } from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from '../contexts/DataLayer';

export const Sidebar = ({spotify}) => {
    const [{playlists},dispatch]=useDataLayerValue()
    const switchPlaylist=(id)=>{
        spotify.getPlaylist(id).then(playlist=>{
            dispatch({
              type:'SET_DISCOVER_WEEKLY',
              discover_weekly: playlist
            })
          })
    }
    console.log(playlists)
    return (
        <div className="sidebar">
                  <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
        <SidebarOption title="Home" Icon={HomeIcon} />
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {
            playlists && playlists.items.map(playlist=>{
                return(
                    <SidebarOption switchPlaylist={()=>{switchPlaylist(playlist.id)}} title={playlist.name} />

                )
            })
        }

        </div>
    )
}
