import React from 'react';
import '../App.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setArtworksByRandom, setArtworksBySearch, setArtworksByDept } from '../redux/actionCreators';
import IncrementButton from './IncrementButton';


class ArtContainer extends React.Component{

    componentDidMount(){
        switch(this.props.userSelectedInStoresState){
            case "random":
                return this.props.setArtworksWithinDispatchRandom()

            case "search":
                let searchTerm = this.props.searchTermInStoresState
                return this.props.setArtworksWithinDispatchSearch(searchTerm)

            case "dept":
                let id = parseInt(this.props.match.params.department)
                console.log(id)
                return this.props.setArtworksWithinDispatchDept(id)
            
            default:
        }
        //this.props.setArtworksWithinDispatchRandom()
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
            <div>
                <div id="art-container">
                    {this.props.artworksInStoresState.map(this.renderArt)}
                </div>
                <IncrementButton />
            </div>

        )
    }

}

function mapStateToProps(state){
    //this object that we return will have its key: value pairs inside of props for the component at the end
    return {
        artworksInStoresState: state.artworks,
        userSelectedInStoresState: state.userSelected, 
        searchTermInStoresState: state.search
    }
}

function mapDispatchToProps(dispatch){
    return {
        setArtworksWithinDispatchRandom: () => dispatch(setArtworksByRandom()), 
        setArtworksWithinDispatchSearch: (searchTermInStoresState) => dispatch(setArtworksBySearch(searchTermInStoresState)),
        setArtworksWithinDispatchDept: (department_id) => dispatch(setArtworksByDept(department_id))
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