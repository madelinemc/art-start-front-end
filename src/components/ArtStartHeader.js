import React from 'react';
import ArtStartLogo from '../images/ArtStartLogo.png'
import ArtButton from './ArtButton';

import { Link } from 'react-router-dom';

class ArtStartHeader extends React.Component{

    render(){
        return(
            <div className="art-start-header-image">
                <div className="button-container">
                    <Link to={"/search"}><ArtButton btnName={"search for art"}/></Link>
                    <Link to={"/artwork"}><ArtButton btnName={"show me art"}/></Link>
                    <Link to={"/departments"}><ArtButton btnName={"by department"}/></Link>
                </div>
            </div>
        )
    }

}

export default ArtStartHeader