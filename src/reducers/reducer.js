export const initialState={
    user:null,
    token:null,
    //token:"BQDA2MPaN1iWrs2SfSRRzhBuiguHNg8Wk8zkf85HR-WCEmrk7utwN0PLCngSiLgGKmjUSriTvTNZ8DrDPavBEcEHqqLJmNEDFasP9ZkGICxg6L-GVDuxvizKovBBBDRNEl6wcFf6HUDYnlpwLMLOb_NacYpxKupFHI1q_SKBJQexiMjm91an",
    playLists:[],
    discoverWeekly:null,
    top_artists:null,
    playing:false,
    item:null
}

export const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'SET_USER' : 
        return{
            ...state,
            user:action.user
        }
        case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
        case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists
        }
        case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discoverWeekly:action.discover_weekly
        }
        case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
      
        case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                  ...state,
                  top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                  ...state,
                  spotify: action.spotify,
            };
        default: return state
    }
}