import React from 'react';

class DepartmentList extends React.Component{

    state = {departments: []}

    componentDidMount(){
        fetch("http://localhost:3000/departments/")
            .then(response => response.json())
            .then(responseObj => {
                this.setState({departments: responseObj})
            })
    }

    renderDepartmentButtons() {
        let i = 0
        while(i <= 16)
            return <img src={`'../images/met-${i}.png'`} alt={"met museum visitor button"}/>
        
    }

    render(){
        return(
            <div id="department-list">
        
            </div>
        )
    }

}

export default DepartmentList