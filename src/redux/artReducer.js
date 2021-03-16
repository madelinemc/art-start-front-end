import { SET_ARTWORKS } from './actionTypes';

//a reducer always wants to return a new updated state value. using the switch statement allow us to determine the only possible ways state can change
export function artReducer(state = {artworks: []}, action) { //provide default version of state ex: state = {key: value}
  switch(action.type){
    case SET_ARTWORKS:
      return {artworks: action.payload} //the action is going to modify the state in some way and we always want to return a new object. the return value will become the up to date version of state.
    default:
      return state;
    }
} 