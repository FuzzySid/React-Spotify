import React from 'react';
import './App.css';
import { Login } from './views/Login';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  return (
    <div className="app">
        {/* Spotify Logo */}

        {/* Login with Spotify button */}
        <Login/>
    </div>
  );
}

export default App;
