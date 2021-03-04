import React from 'react';
import ArtStartLogo from '../images/ArtStartLogo.png'

class ArtStartHeader extends React.Component{

    render(){
        return(
            <div id="art-start-header">
                <img 
                    src={ ArtStartLogo }
                    alt="met-museum-with-art-start-logo" 
                />
            </div>
        )
    }

}

export default ArtStartHeader