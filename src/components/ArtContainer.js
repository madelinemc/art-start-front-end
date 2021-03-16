import React from 'react';
import './App.css';

import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

class ArtContainer extends React.Component{

    renderArt(title){
        return <li>{title}</li>
    }

    render(){
        return (
            <div id="art-container">
                {props.artworksInStoresState.map(renderArt)}
            </div>
        )
    }


    mapStateToProps(state){
        //this object that we return will have its key: value pairs inside of props for the component at the end
        return {
            artworksInStoresState: state.titles
        }
    }

    mapDispatchToProps()

}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)