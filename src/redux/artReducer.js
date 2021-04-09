import { SET_ARTWORKS, USER_SELECT_RANDOM, USER_SELECT_SEARCH, USER_SELECT_DEPT } from './actionTypes';

//a reducer always wants to return a new updated state value. using the switch statement allow us to determine the only possible ways state can change
export function artReducer(state = {
  artworks: [],
  userSelected: "random"
  },
   action) { //provide default version of state ex: state = {key: value}
  switch(action.type){

    case SET_ARTWORKS:
      return {...state, artworks: action.payload} //the action is going to modify the state in some way and we always want to return a new object. the return value will become the up to date version of state.
    
    case USER_SELECT_RANDOM:
      return {...state, userSelected: "random"}
    
    case USER_SELECT_SEARCH:
      return {...state, userSelected: "search"}
    
    case USER_SELECT_DEPT:
      return {...state, userSelected: "dept"}
    
    default:
      return state;
    }
} 