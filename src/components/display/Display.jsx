import React from "react";
import { Link } from 'react-router-dom';
import './display.scss';
import EmployeeService from '../../services/employee-service';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';

import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -1.png';
import profile3 from '../../assets/profile-images/Ellipse -8.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';

var imgUrl;
var loadImg=(img) =>{
    if(img==='../../assets/profile-images/Ellipse -1.png')
    {
        console.log("1")
        imgUrl = profile2
    }
    if(img==='../../assets/profile-images/Ellipse -3.png')
    {
        console.log("2")
        imgUrl = profile1
    }
    if(img==='../../assets/profile-images/Ellipse -8.png')
    {
        console.log("3")
        imgUrl = profile3
    }
    if(img==='../../assets/profile-images/Ellipse -7.png')
    {
        console.log("4")
        imgUrl = profile4
    }
}

const Display = (props) => {

    const employeeService = new EmployeeService();

    const remove = (id) => {
        employeeService.deleteEmployee(id).then(data => {
            console.log("Deleted data: ", data);
        }).catch(error => {
            console.log("Error after ", error);
        });
        window.location.replace("/");
        // <Redirect to="/" />
    }

    const update = (id) => {
        let employeeData;
        employeeService.getEmployee(id).then(data => {
            employeeData = data.data;
            localStorage.setItem("employeeData", JSON.stringify(employeeData));
        }).catch(error => {
            console.log("Error after ", error);
        });
        employeeService.updateEmployee(employeeData, id).then(data => {
            console.log("Deleted data: ", data);
        }).catch(error => {
            console.log("Error after ", error);
        })
        window.location.replace("/update");
        // <Redirect to="/add" />
        
    }

    return (
        <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, index) => (
                        <tr key={index}>
                            
                            <td><img className="profile" alt=""  onLoad={loadImg(element.profileUrl)} src={imgUrl} /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.departmentValues && element.departmentValues.map(dept => (
                                <div className="dept-label">{dept}</div>
                            ))}</td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            <td>

                                <img onClick={() => remove(element.id)} alt="delete" src={deleteIcon} />
                                <Link    className="btn btn-info" 
                                                        to={`/update/${element.id}`} >
                                    <img alt="edit" src={editIcon} />
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Display;