import React, {useState} from "react";
import './payroll-form.css';
import ProfilePic1 from '../../assets/icons/profile-images/Ellipse -1.png';
import ProfilePic2 from '../../assets/icons/profile-images/Ellipse -2.png';
import ProfilePic3 from '../../assets/icons/profile-images/Ellipse -3.png';
import ProfilePic4 from '../../assets/icons/profile-images/Ellipse -4.png';
import {Link} from "react-router-dom";
import employeeService from "../../service/employee-service";

const PayrollForm = (props) => {

    let initialValue = {
        name: '',
        profilePicArray: [
            {url: ProfilePic1},
            {url: ProfilePic2},
            {url: ProfilePic3},
            {url: ProfilePic4}
        ],
        allDepartments: ['HR', 'Sales', 'Finance', 'Engineer', 'Others'],
        departmentValue: [],
        gender: '',
        salary: '',
        day: '',
        month: '',
        year: '',
        notes: '',
        startDate: '',
        id: Date.now(),
        profileURL: '',
        isUpdate: false
    }

    const [formValue, setForm] = useState(initialValue);

      const onReset =  () => {
        setForm({
            name: "",
            profilePic: "",
            gender: "",
            department: [],
            salary: "",
            startDate: "",
            notes: ""
        });
      };

    const changeValue = (event) => {
        setForm({...formValue, [event.target.name]: event.target.value})
    }
 
    const onCheckChange = (name) => {
        let index = formValue.departmentValue.indexOf(name);
        let checkArray = [...formValue.departmentValue];
        if (index > -1) {
            checkArray.splice(index, 1);
        }
        else {
            checkArray.push(name);
        }
        setForm({...formValue, departmentValue: checkArray})
    }
 
    const getChecked = (name) => {
        return formValue.departmentValue && formValue.departmentValue.includes(name);
    }
 
    const save =  (event) => {
    
        event.preventDefault();
        let Object = {
            name: formValue.name,
            gender: formValue.gender,
            department: formValue.departmentValue,
            salary: formValue.salary,
            startDate: `${formValue.day} ${formValue.month} ${formValue.year}`,
            day: formValue.day,
            month: formValue.month,
            year: formValue.year,
            note: formValue.notes,
            id: formValue.id,
            profilePic: formValue.profileURL,
            isUpdate: formValue.isUpdate
            
        };
console.log(Object);
        employeeService.addEmployee(Object).then((response) => {
            console.log(Object);
            alert(`employee details added`,response);
        })
       
        localStorage.setItem('employeelist',JSON.stringify(Object));
        console.log(Object);
        alert('employee  has been added')
    }
    
    return (
        
        <div className="form-content">
            <form className="form" action="#" onSubmit={save}>

                <div className="form-head">Employee Payroll Form</div>
                <div className="row-content">
                    <label htmlFor="name" className="label text">Name</label>
                    <input type="text" name="name" id="name" className="input" value={formValue.name} placeholder="Your Name ..." onChange={changeValue} required />
                </div>

                <div className="row-content">
                   <label className="label text" htmlFor="profile">Profile image</label>
                   <div className="profile-radio-content">
                       <label>
                           <input type="radio" id="profile1" name="profileURL" checked={formValue.profileURL==='../../assets/profile-images/Ellipse -1.png'}
                                  value="../../assets/profile-images/Ellipse -1.png" onChange={changeValue}
                                  required />
                           <img className="profile" id="image1" src={ProfilePic1} alt=""/>
                       </label>
                       <label>
                           <input type="radio" id="profile2" name="profileURL" checked={formValue.profileURL==='../../assets/profile-images/Ellipse -2.png'}
                                  value="../../assets/profile-images/Ellipse -2.png" onChange={changeValue}
                                  required />
                           <img className="profile" id="image2" src={ProfilePic2} alt=""/>
                       </label>
                       <label>
                           <input type="radio" id="profile3" name="profileURL"checked={formValue.profileURL==='../../assets/profile-images/Ellipse -3.png'}
                                  value="../../assets/profile-images/Ellipse -3.png" onChange={changeValue}
                                  required />
                           <img className="profile" id="image3" src={ProfilePic3} alt=""/>
                       </label>
                       <label>
                           <input type="radio" id="profile4" name="profileURL" checked={formValue.profileURL==='../../assets/profile-images/Ellipse -4.png'}
                                  value="../../assets/profile-images/Ellipse -4.png" onChange={changeValue}
                                  required />
                           <img className="profile" id="image4" src={ProfilePic4} alt=""/>
                       </label>
                   </div>
               </div>

                <div className="row-content">
                    <label className="label text" htmlFor="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="Male" checked={formValue.gender==="Male"} onChange={changeValue} required/>
                        <label className="text" htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" checked={formValue.gender==="Female"} onChange={changeValue} required/>
                        <label className="text" htmlFor="female">Female</label>
                    </div>
                </div>

                <div className="row-content">
                   <label className="label text" htmlFor="department">Department</label>
                   <div>
                       {formValue.allDepartments.map(item => (
                           <span key={item}>
                                <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                 defaultChecked={() => getChecked(item)} value={item} />
                               <label className="text" htmlFor={item}>{item}</label>
                           </span>
                       ))}
                   </div>
               </div>

                <div className="row-content">
                    <label className="label text" htmlFor="salary">Choose Your Salary: </label>
                    <input className="input" type="range" name="salary" id="salary" min="300000" max="500000" step="100" 
                            value={formValue.salary==="" ? "300000" : formValue.salary} onChange={changeValue}/>
                    <output className="salary-output text" htmlFor="salary">{formValue.salary==="" ? 300000 : formValue.salary}</output>
                </div>

                <div className="row-content">
                    <label className="label text" htmlFor="startDate">Start Date</label>
                    <div>
                        <select id="day" name="day" onChange={changeValue} value={formValue.day}>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select id="month" name="month" onChange={changeValue} value={formValue.month}>
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                        <select id="year" name="year" onChange={changeValue} value={formValue.year}>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>

                <div className="row-content">
                    <label className="label text" htmlFor="notes">Notes</label>
                    <textarea id="notes" className="input" name="notes" value = {formValue.notes} 
                               onChange={changeValue}></textarea>
                </div>

                <div className="buttonParent">
                   <Link to="/" className="resetButton button cancelButton">Cancel</Link>
                   <div className="submit-reset">
                       <button type="submit" className="button submitButton" id="submitButton" onClick={save}>{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                       <button type="reset" className="resetButton button" onClick={onReset}>Reset</button>
                   </div>
               </div>

            </form>
        </div>
    )
}

export default PayrollForm;