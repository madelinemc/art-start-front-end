import React from 'react';

class IncrementButton extends React.PureComponent{

    state = {
        increment: 0
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment: </button> 
                <p>{this.state.increment}</p>
            </div>

        )
    }

    handleClick = () => {
        // this.setState(
        //     {
        //         increment: this.state.increment + 1
        //     }
        // )

        console.log('a');

        fetch("http://localhost:3000/artworkfjdskljflkdsjflds")
            .then(resp => {
                undefined.forEach(something => something);
                console.log('b', resp);
                return resp.json()
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e');


        // a d e
    }


}

export default IncrementButton
