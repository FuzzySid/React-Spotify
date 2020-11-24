import React from 'react'
import { Body } from './Body';
import { Footer } from './Footer';
import './Player.css';
import { Sidebar } from './Sidebar';

export const Player = ({spotify}) => {
    return (
        <div className="player">
           <div class="player__body">
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
            </div>
            <div class="player__footer">
                <Footer/>
            </div>   
        </div>
    )
}
