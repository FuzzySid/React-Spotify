import React,{useState,useEffect} from 'react';
import './App.css';
import { Login } from './views/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl, loginUrl } from './spotify.config';
import { Player } from './components/Player';
import { useDataLayerValue } from './contexts/DataLayer';

const spotify=new SpotifyWebApi();

function App() {
  const [{token},dispatch]=useDataLayerValue()
    useEffect(()=>{
        const hash=getTokenFromUrl()
        window.location.hash="";
        const _token=hash.access_token;
        if(_token){
          //setToken(_token)
          dispatch({
            type:'SET_TOKEN',
            token:_token
          })
          spotify.setAccessToken(_token)
          spotify.getMe().then(user=>{
            console.log('user',user)
            dispatch({
              type:'SET_USER',
              user
            })
          })
          spotify.getUserPlaylists().then(playlists=>{
            dispatch({
              type:'SET_PLAYLISTS',
              playlists
            })
          })
          spotify.getUserPlaylists().then(playlists=>{
            spotify.getPlaylist( playlists.items[0].id).then(playlist=>{
              dispatch({
                type:'SET_DISCOVER_WEEKLY',
                discover_weekly: playlist
              })
            })
            
          })
          
        }
        
    },[])
  return (
    <div className="app">
         {
           token ? <Player spotify={spotify}/>
           :
           <Login/>

         }
    </div>
  );
}

export default App;
