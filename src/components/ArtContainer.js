import React from 'react';
import '../App.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setArtworksByRandom, setArtworksBySearch, setArtworksByDept } from '../redux/actionCreators';


class ArtContainer extends React.Component{

    componentDidMount(){
        switch(this.props.userSelectedInStoresState){
            case "random":
                return this.props.setArtworksWithinDispatchRandom()

            case "search":
                return this.props.setArtworksWithinDispatchSearch()

            case "dept":
                return this.props.setArtworksWithinDispatchDept()
            
            default:
        }
        //this.props.setArtworksWithinDispatchSearch()
    }

    renderArt(artwork){
        return (
            <div className="art-cards">
                <p>{artwork.title}</p>
                <Link key={artwork.id} to={"/artwork/" + artwork.id}><img src={`${artwork.primary_image_small}`} alt={artwork.title}/></Link>
            </div>
        )
    }

    render(){
        return (
            <div id="art-container">
                {this.props.artworksInStoresState.map(this.renderArt)}
            </div>
        )
    }

}

function mapStateToProps(state){
    //this object that we return will have its key: value pairs inside of props for the component at the end
    return {
        artworksInStoresState: state.artworks,
        userSelectedInStoresState: state.userSelected
    }
}

function mapDispatchToProps(dispatch){
    return {
        setArtworksWithinDispatchRandom: () => dispatch(setArtworksByRandom()), 
        setArtworksWithinDispatchSearch: () => dispatch(setArtworksBySearch()),
        setArtworksWithinDispatchDept: () => dispatch(setArtworksByDept())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)



//original working mDTP:
// function mapDispatchToProps(dispatch){
//     return {
//         setArtworksWithinDispatch: () => dispatch(setArtworks()) //because of thunk, dispatch can now receive either objects(actions) or functions. 
//         //if it receives a function, it knows to invoke it and pass dispatch to it so the function will have access to dispatch inside.
//     }
// }