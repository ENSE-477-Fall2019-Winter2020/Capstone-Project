import React, { useState } from 'react';
import Navbar from '../Navbar';
import Lab3 from '../Courses/Course3';
import {Link, Route} from 'react-router-dom';


const Course3 = () => {
    const initial_state = {
        form3: [{
            currGrade3: '',
            desiredGrades3: '',
            avrGrade3: '',
        }],
        grades3: [{
            id: 1,
            courseItem3: '',
            dueDate3: '',
            weight3: '',
            actualGrade3: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form3);
    const[datas, setDatas] = useState(initial_state.grades3);
    const[form, setForm] = useState(false);
    const[checked, setChecked] = useState(false);

    const handleOnChangeGrades = event => {
       
        const tempData = [...datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
 

        console.log("onChange is called");
       
    }

    const handleOnChangeForm = event => {
        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;

        setValues(tempValues);
    }

    const handleChecked = () => {
        setChecked(!checked);
        console.log(checked);
    }

    const addGrades = () =>  {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
                id: id,
                courseItem3: '',
                dueDate3: '',
                weight3: '',
                actualGrade3: ''
        
        }])


    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);

        console.log(tempData);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setForm(!form);
        
        console.log(values);
       
    };

    const showForm = () => {
        setForm(!form);
    };
  
    const submitSave = event => {
        event.preventDefault();
    }

    return (
        <div>
            <Navbar />

            <h1>Course</h1>

            <button onClick={showForm}>Click here to enter grade information</button>
            
            {(form) ? 
                <div className="course-form">
                    <form onSubmit={handleOnSubmit}>

                        <label>Desired Grade: </label>
                        <input 
                            type = "number"
                            name ="desiredGrade3"
                            value={values.desiredGrades3}
                            placeholder="Enter your desired grade"
                            onChange={handleOnChangeForm}/>
                        
                        <label>Is there a lab?</label>
                        <select value={values.lab3} onChange={handleOnChangeForm}  >
                            <option value="yes">Yes</option>
                            <option  value="no">No</option>
                        </select>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            :null}
            <br />
            <br />

            {(checked) ? <Link to="/lab3"><button>Lab</button></Link>:null}
            <form onSubmit={submitSave}>
            <div className="grade-remaining">
                <label>Current Grade:  </label>
                <p>Here is where the current grades calculated will go</p>
            </div>

            <table>
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due in</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                    
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="courseItem3"
                            data-id={index}
                            type="text"
                            value={item.courseItem3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate3"
                            data-id={index}
                            type="date"
                            value={item.dueDate3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p></p></td>
                        <td><input 
                            name="weight3"
                            data-id={index}
                            type="number"
                            value={item.weight3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade3"
                            data-id={index}
                            type="number"
                            value={item.actualGrade3}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={() => handleDelRow(item)}>X</button></td>
                    </tr>
                ))}
            </table>
            <button onClick={addGrades}>+ Add New Course Item</button>

            <Route path='/lab3' component={Lab3}></Route>
            <button type = 'submit' className = 'savebtn'>Save</button>
            </form>
        </div>
    )

}

export default Course3
