import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useDataLayerValue } from '../contexts/DataLayer';

export const Header = () => {
    const [{user},dispatch]=useDataLayerValue()
    return (
        <div className="header">
            <div class="header__left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Artists, Songs, or Podcasts"/>
            </div>
            <div class="header__right">
                <Avatar src={user && user.images[0] && user.images[0].url} alt={user && user.display_name}/>
                    <h4>{user && user.display_name}</h4>
            </div>
        </div>
    )
}
