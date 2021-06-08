# Fuzzy React Spotify

[Fuzzy React Spotify](https://fuzzy-netflix-clone.web.app/) is a simple clone of [Spotify Web Clone](http://netflix.com/) built using ReactJS and [Spotify API](https://developer.spotify.com/documentation/web-api/). 🎶

Users can log in to their Spotify Accounts. ![Landing Page](https://ik.imagekit.io/pibjyepn7p9/spotify-login_KYf1NPf_D.PNG)



Spotify Authentication API authenticates the user and redirects back to our app. To manage user state, Global State is maintained using React's Context API. 



![Login Page](https://ik.imagekit.io/pibjyepn7p9/spotify-login-page_CwEYlkHn93.PNG)

Once logged in, users can see their playlists, play their songs trailers etc. All the playlists and songs data is fetched from Spotify API.  The project is deployed on Firebase. 

![Dashboard](https://ik.imagekit.io/pibjyepn7p9/spotify-home_LSw6dJoeRw.PNG)



This project demonstrates -

- Integrating external APIs for authentication and fetching data 
- Playing songs in browser using HTML 5 <audio>
- Cloning designs and UI from a popular website



## Setup and Running Locally

If you wish to run the project locally, follow the steps below:

Run the following command to clone the repository locally

```shell
git clone https://github.com/FuzzySid/netflix-clone.git
```

Inside the directory, run

```shell
npm i
```

To install all the dependencies. If you run into any errors while installing packages, run the following command instead

```shell
npm i --legacy-peer-deps
```

You'll then need a `spoitify.config.js` inside the `src` directory to get started. Add the following code inside it

```javascript
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri= <REDIRECT_URI>;
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  const clientId=<CLIENT_ID>;

  export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
      let parts=item.split('=')
      initial[parts[0]]=decodeURIComponent(parts[1])
      return initial;
    },{})
  }

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;  
```

Replace `CLIENT_ID` and `REDIRECT_URI` with the ones that you can generate from [Spotify Developers API Dashboard](https://developer.spotify.com/dashboard/applications).  



### Getting Client Id

You'll need to login through your account and create a new app

![Create a new app on Spotify Developer Dashboard](https://ik.imagekit.io/pibjyepn7p9/spotify_dashboard_P_-93439g.PNG)

After creating the app, click on it and you'll be able to see your `CLIENT_ID`

![Client Id inside app dashboard](https://ik.imagekit.io/pibjyepn7p9/Spotify_Client_id_DnucEyMbp.PNG)



### Generating Redirect URI



To create `REDIRECT_URI` , click on **Edit Settings**.

 ![Edit Settings](https://ik.imagekit.io/pibjyepn7p9/Spotify_Client_id_1__8b3Sei-7W.PNG)

Inside the popup, go to the **Redirect URI** section and add a new **Redirect URI**. Make sure you add the url of your deployed project as well as the localhost domain where you'll spin your React development server. For example, I use localhost:3000 while developing React Apps so I have added it as a **Redirect URI**. If you don't add a Redirect URI, you won't be able to get back the authenticated user data from Spotify Authentication API.

![Redirect URI](https://ik.imagekit.io/pibjyepn7p9/Redirect_URI_Spotify_5wM8SIECC.PNG)  



Finally, run the following command to open a development server

```shell
npm start
```

