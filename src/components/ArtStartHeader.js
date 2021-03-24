import React from 'react';
import ArtStartLogo from '../images/ArtStartLogo.png'
import ArtButton from './ArtButton';

import { Link } from 'react-router-dom';

class ArtStartHeader extends React.Component{

    render(){
        return(
            <div id="art-start-header-image">
                <img 
                    src={ ArtStartLogo }
                    alt="met-museum-with-art-start-logo" 
                />
                <Link to={"/search"}><ArtButton btnName={"search for art"}/></Link>
                <ArtButton btnName={"show me art"}/>
                <Link to={"/departments"}><ArtButton btnName={"by department"}/></Link>
            </div>
        )
    }

}

export default ArtStartHeader