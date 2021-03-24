import React from 'react';
import Met1 from '../images/met-1.png';
import Met2 from '../images/met-2.png';
import Met3 from '../images/met-3.png';
import Met4 from '../images/met-4.png';
import Met5 from '../images/met-5.png';
import Met6 from '../images/met-6.png';
import Met7 from '../images/met-7.png';
import Met8 from '../images/met-8.png';
import Met9 from '../images/met-9.png';
import Met10 from '../images/met-10.png';
import Met11 from '../images/met-11.png';
import Met12 from '../images/met-12.png';
import Met13 from '../images/met-13.png';
import Met14 from '../images/met-14.png';
import Met15 from '../images/met-15.png';
import Met16 from '../images/met-16.png';

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

        let metButtonArray = [Met1, Met2, Met3, Met4, Met5, Met6, Met7, Met8, Met9, Met10, Met11, Met12, Met13, Met14, Met15, Met16]

        return (
            <div className="department-list">
                <img src={ metButtonArray[index] } alt={"met museum visitor button"} className="met-button-img"/>
                <p>{department.name}</p>
            </div>     
        )
    }

    render(){
        return(
            <div>
                {this.state.departments.map(this.renderDepartmentButtons)}
            </div>
        )
    }

}

export default DepartmentList