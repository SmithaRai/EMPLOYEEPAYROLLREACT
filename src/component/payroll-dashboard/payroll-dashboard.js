import React from "react";
import { Link } from "react-router-dom";
import "./payroll-dashboard.css";
import Edit1 from '../../assets/icons/create-black-18dp.svg';
import delete1 from '../../assets/icons/delete-black-18dp.svg';
import profile_pic_1 from'../../assets/icons/profile-images/Ellipse -3.png';
import profile_pic_2 from '../../assets/icons/profile-images/Ellipse -1.png';
import profile_pic_3 from '../../assets/icons/profile-images/Ellipse -8.png';
import profile_pic_4 from '../../assets/icons/profile-images/Ellipse -7.png';
import EmployeeService from "../../service/employee-service";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: [],
        };
    }



    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            this.setState({ employee: response.data.data });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Employee Details
                                <div className="emp-count">10</div>
                            </div>
                            <Link to="/payroll-form" className="add-button">
                                <img src="" alt="" />Add Employee</Link>
                        </div>
                    </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>Profile Image</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.employee.map((employee) => (
                                    <tr key={employee.id}>
                                        <td><img src={employee.profileURL === "../../assets/profile-images/Ellipse -1.png"
                                    ?profile_pic_2
                                :employee.profileURL === "../../assets/profile-images/Ellipse -3.png"
                                    ?profile_pic_1
                                :employee.profileURL === "../../assets/profile-images/Ellipse -7.png"
                                ?profile_pic_4
                                : employee.profileURL === "../../assets/icons/profile-images/Ellipse -8.png"
                                ?profile_pic_3
                                :profile_pic_1
                                } alt="ProfilePic" srcset="" /></td>
                                    
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>
                                            {employee.department.map(dep =>
                                                <div className="dept-label" id="dept"> {dep} </div>)}
                                        </td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.startDate}</td>
                                        <td>
                                            <img
                                                name={employee.id}
                                                src= {delete1}
                                                alt="delete"
                                                onClick={() =>
                                                    this.deleteEmployee(employee.id)
                                                }
                                            />
                                            <img
                                                name={employee.id} 
                                                src={Edit1}
                                                alt="edit"
                                                onClick={() =>
                                                    this.updateEmployee(employee.id)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;