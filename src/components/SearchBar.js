import React from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { getSearchTerm } from '../redux/actionCreators';


class SearchBar extends React.Component{

    state = {
        toSearch: false
    }

    render(){
        if (this.state.toSearch){
            return <Redirect to={"/search/" + this.props.searchTermInStoresState + "/artwork"} />;
        }
        return(
            <div className="search-wrap">
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input name="search" type="text" className="search-term" placeholder="Search By Artist Name + Push Enter"></input>
                    </form>
                </div>
            </div>

        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let searchTerm = e.target['search'].value
        this.props.setSearchTermWithinDispatch(searchTerm)
        this.setState({ toSearch: !this.state.toSearch })
    }

}

function mapStateToProps(state){
    return {
        searchTermInStoresState: state.search
    }
}

function mapDispatchToProps(dispatch){
    return {
        setSearchTermWithinDispatch: (searchTermInStoresState) => dispatch(getSearchTerm(searchTermInStoresState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)