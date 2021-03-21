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