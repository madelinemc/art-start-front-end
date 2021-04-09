import { SET_ARTWORKS, USER_SELECT_RANDOM } from './actionTypes';

const url = "http://localhost:3000/"

export function setArtworksByRandom(){
    return function(dispatch){
        dispatch({type: USER_SELECT_RANDOM})
        fetch(url + "artworks")
        .then(response => response.json())
        .then(responseObject => {
            let artworks = responseObject
            console.log(artworks)
            dispatch({type: SET_ARTWORKS, payload: artworks})
        })
    }
}
//thunk: setArtworks returns a fuction that receives dispatch as an argument

export function setArtworksBySearch(){
    return function(dispatch){
        fetch(url + "artworks")
        .then(response => response.json())
        .then(responseObject => {
            let artworks = responseObject
            console.log(artworks)
            dispatch({type: SET_ARTWORKS, payload: artworks})
        })
    }
}

export function setArtworksByDept(department_id){
    return function(dispatch){
        fetch(url + "departments/" + department_id + "/artworks")
        .then(response => response.json())
        .then(responseObject => {
            let artworks = responseObject
            console.log(artworks)
            dispatch({type: SET_ARTWORKS, payload: artworks})
        })
    }
}


//example action creators:

// export function name(){
//     return {type: "NAME"}
// }

// export function another(arg){
//     return {type: "ANOTHER", payload: arg}
// }