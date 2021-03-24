import React from 'react';

class DepartmentList extends React.Component{

    state = {departments: []}

    componentDidMount(){
        fetch("http://localhost:3000/departments/")
            .then(response => response.json())
            .then(responseObj => {
                this.setState({departments: responseObj})
                console.log(responseObj)
            })
    }

    renderDepartmentButtons(department, index){
        return (
            <div>
                <img src={`'../images/met-${index}.png'`} alt={"met museum visitor button"}/>
                <p>{department.name}</p>
            </div>     
        )
    }

    render(){
        return(
            <div id="department-list">
                {this.state.departments.map(this.renderDepartmentButtons)}
            </div>
        )
    }

}

export default DepartmentList