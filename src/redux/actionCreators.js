import { SET_ARTWORKS } from './actionTypes';

const url = "http://localhost:3000/artworks"

export function setArtworks(){
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(responseObject => {
            let artworks = responseObject
            console.log(artworks)
            dispatch({type: SET_ARTWORKS, payload: artworks})
        })
    }
}
//thunk: setArtworks returns a fuction that receives dispatch as an argument



//example action creators:

// export function name(){
//     return {type: "NAME"}
// }

// export function another(arg){
//     return {type: "ANOTHER", payload: arg}
// }