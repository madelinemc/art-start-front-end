import React from 'react';
import ArtStartLogo from '../images/ArtStartLogo.png'
import ArtButton from './ArtButton';

class ArtStartHeader extends React.Component{

    render(){
        return(
            <div id="art-start-header-image">
                <img 
                    src={ ArtStartLogo }
                    alt="met-museum-with-art-start-logo" 
                />
                <ArtButton btnName={"search for art"}/>
                <ArtButton btnName={"show me art"}/>
                <ArtButton btnName={"by department"}/>
            </div>
        )
    }

}

export default ArtStartHeader