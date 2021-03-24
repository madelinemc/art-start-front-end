import React from 'react';

class ArtShow extends React.PureComponent{

    state = {art: false}

    componentDidMount(){
        let id = parseInt(this.props.match.params.id)
        fetch("http://localhost:3000/artworks/" + id)
            .then(response => response.json())
            .then(responseObj => {
                this.setState({art: responseObj})
            })
    }

    render(){
        if(this.state.art){
            console.log(this.state.art)
            return(
                <div className="art-show-container">
                    <div className="grid art-image">
                        <img src={`${this.state.art.primary_image}`} alt={"photo of " + this.state.art.title} className="art-show-image"/>  
                    </div>
                    <div className="grid art-text">
                        <p><strong>{this.state.art.title}</strong></p>
                        <p><strong>By:  </strong> {}</p>
                        <p><strong>Date:  </strong>{this.state.art.date}</p>
                        <p><strong>Culture:  </strong>{this.state.art.culture}</p>
                        <p><strong>Period:  </strong>{this.state.art.period}</p>
                        <p><strong>Medium:  </strong>{this.state.art.medium}</p>
                        <p><strong>Dimensions:  </strong>{this.state.art.height}h x  {this.state.art.width}w x {this.state.art.depth} d</p>
                        <p><strong>Medium:  </strong>{this.state.art.medium}</p>
                    </div>
                </div>
            )
        } else {
            return (<div><p>checking through the archives...</p></div>)
        } 
    }


}

export default ArtShow
