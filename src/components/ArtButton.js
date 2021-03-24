import React from 'react';

class ArtShow extends React.Component{

    render(){
        return(
            <button className={"nav-btn"}>
                {this.props.btnName}
            </button>
        )
    }

}

export default ArtShow

//trigger callback function that dispatcches an action - hit backend, fetch whatever you want and then saves to state, switches state flag of what components to show or hide T or F
//or have callback function that forces a url into browser header, react app takes that info and goes to the router you have set up