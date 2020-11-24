import React from 'react'
import './SidebarOption.css';

export const SidebarOption = ({title,Icon,switchPlaylist}) => {
    return (
        <div className="sidebarOption">
            {
                Icon && <Icon className="sidebarOption__icon"/>
            }
           {
               Icon ? <h4>{title}</h4> : <p onClick={switchPlaylist}>{title}</p>
           } 
        </div>
    )
}
