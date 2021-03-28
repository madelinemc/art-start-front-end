import React from 'react';


class SearchBar extends React.Component{

    render(){
        return(
            <div className="search-wrap">
                <div className="search-bar">
                    <input type="text" className="search-term" placeholder="Search By Artist Name">
                    </input>
                    <button type="submit" className="search-button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

        )
    }

}

export default SearchBar