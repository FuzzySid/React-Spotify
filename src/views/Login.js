import React,{useEffect,useState} from 'react';
import { getTokenFromUrl, loginUrl } from '../spotify.config';
import './Login.css';

export const Login = () => {
    const [token,setToken]=useState(null);
    useEffect(()=>{
        const hash=getTokenFromUrl()
        window.location.hash="";
        const _token=hash.access_token;
        if(_token) setToken(_token)
    },[])
    return (
        <div className="login">
            {
                token ? <h1 style={{color:'white'}}>Logged in</h1> :
                <>
                <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="" />
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
                </>

            }
            
        
        
        </div>
    )
}
