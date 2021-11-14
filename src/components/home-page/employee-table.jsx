import React from "react";
import { withRouter } from "react-router-dom";
import deleteIcon from '../../assets/icons/delete-black-18dp.svg'
import editIcon from '../../assets/icons/create-black-18dp.svg'
import profile from '../../assets/profile-images/Ellipse -8.png'
import './home-page.scss';

import profile1 from '../../assets/profile-images/Ellipse -3.png'
import profile2 from '../../assets/profile-images/Ellipse -2.png'
import profile3 from '../../assets/profile-images/Ellipse -1.png'
import profile4 from '../../assets/profile-images/Ellipse -8.png'
var imgurl;
const Display = (props) => {
    const remove=(id)=>
    {
        console.log("remove")
    }

    const update=(id)=>
    {
        console.log("update")


    }

var loadImg=(img)=>{
if(img=='../../assets/profile-images/Ellipse -3.png')
{
    imgurl=profile1
}
else if (img='../../assets/profile-images/Ellipse -1.png'){
    imgurl=profile3
}
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
                    <th>Actions</th>"

                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, ind) => (
                        <tr key={ind}>
                            <td><img className="profile"  onLoad={loadImg(element.profileUrl)} src={imgurl} alt="" /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td><div className="depts">
                                {element.departMentValue && element.departMentValue.map(dept => (
                                    <div className="dept-label">{dept}</div>
                                ))}
                            </div></td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            <td>
                                {}

                                <img onClick={() => remove(element.id)} src={deleteIcon} alt="delete" />
                                <img onClick={() => update(element.id)} src={editIcon} alt="edit" />
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>


    )
}

export default withRouter(Display)