import React from 'react';

import { connect } from 'react-redux';
import { USER_SELECT_RANDOM, USER_SELECT_SEARCH, USER_SELECT_DEPT } from '../redux/actionTypes';

class ArtShow extends React.Component{

    render(){
        return(
            <button className={"nav-btn"} onClick={this.handleClick}>
                {this.props.btnName}
            </button>
        )
    }

    handleClick = (event) => {
        switch(this.props.btnName){
            case "show me art":
                this.props.userSelectedWithinDispatchRandom()
            break;

            case "search for art":
                this.props.userSelectedWithinDispatchSearch()
            break;

            case "by department":
                this.props.userSelectedWithinDispatchDept()
            break;

            default:
        }
    }
}

function mapStateToProps(state){
    return {
        userSelectedInStoresState: state.userSelected
    }
}

function mapDispatchToProps(dispatch){
    return {
        userSelectedWithinDispatchRandom: () => dispatch({type: USER_SELECT_RANDOM}),
        userSelectedWithinDispatchSearch: () => dispatch({type: USER_SELECT_SEARCH}),
        userSelectedWithinDispatchDept: () => dispatch({type: USER_SELECT_DEPT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtShow)