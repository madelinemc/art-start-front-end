import React from 'react';
import './App.css';

import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

class ArtContainer extends React.Component{

    componentDidMount(){
        this.props.setArtworksWithinDispatch()
    }

    renderArt(artwork){
        return <li>{artwork}</li>
    }
    //his render function:
    //makeLisFromTitles(title, index){
        //return <li key={title + "-" + index}>{title}</li>
    //} **need to add a key for an ordered list

    render(){
        return (
            <div id="art-container">
                {this.props.artworksInStoresState.map(this.renderArt)}
            </div>
        )
    }


    mapStateToProps(state){
        //this object that we return will have its key: value pairs inside of props for the component at the end
        return {
            artworksInStoresState: state.artworks
        }
    }

    mapDispatchToProps(dispatch){
        return {
            setArtworksWithinDispatch: () => dispatch(setArtworks()) //because of thunk, dispatch can now receive either objects(actions) or functions. 
            //if it receives a function, it knows to invoke it and pass dispatch to it so the function will have access to dispatch inside.
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)