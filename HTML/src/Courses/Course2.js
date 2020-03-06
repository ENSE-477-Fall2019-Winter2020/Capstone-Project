import React, { useState } from 'react';
import Navbar from '../Navbar';
import {Link, Route} from 'react-router-dom';
import Lab2 from '../Labs/Lab2';
import Lab1 from '../Labs/Lab1';


const Course2 = () => {
    const initial_state = {
        form2: [{
            currGrade2: '',
            desiredGrades2: '',
            avrGrade2: '',
            lab2: ''
        }],
        grades2: [{
            id: 1,
            courseItem2: '',
            dueDate2: '',
            weight2: '',
            actualGrade2: ''
        }]
    };

    const [values, setValues] = useState(initial_state.form2);
    const[datas, setDatas] = useState(initial_state.grades2);

    const handleOnChangeGrades = event => {
       
        const tempData = [datas];
        tempData[event.target.dataset.id][event.target.name] = event.target.value;

        setDatas(tempData);
 

        console.log("onChange is called");
       
    }

    const handleOnChangeForm = event => {
        const tempValues = [values];
        tempValues[event.target.name] = event.target.value;

        setValues(tempValues);
    }

    const addGrades = () =>  {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setDatas(prevCosts => [...prevCosts, {
                id: id,
                courseItem2: '',
                dueDate2: '',
                weight2: '',
                actualGrade2: ''
        
        }])


    };

    const handleDelRow = (data) => {
        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);

        console.log(tempData);
    };

    const handleOnSubmit = (event) => {
        event.preventDefualt();
       
    };

  

    return (
        <div>
            <Navbar />

            <h1>Course</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Current Grade: </label>
                <input 
                    type = "number"
                    name ="currGrade2"
                    value={values.currGrade2}
                    placeholder="Enter your current grade"
                    onChange={handleOnChangeForm}/>

                <label>Desired Grade: </label>
                <input 
                    type = "number"
                    name ="desiredGrade2"
                    value={values.desiredGrades2}
                    placeholder="Enter your desired grade"
                    onChange={handleOnChangeForm}/>
                
                <label>Is there a lab?</label>
                <select value={values.lab2} onChange={handleOnChangeForm}  >
                    <option value="yes">Yes</option>
                    <option  value="no">No</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            

            <label>Average Grade Needed on Remaining Items:  </label>
            <p>Here is where the remainig grades calculated will go</p>

            <Link to="/lab2"><button>Lab</button></Link>

            <table>
                <tr>
                    <th>Course Item</th>
                    <th>Due Date</th>
                    <th>Due in</th>
                    <th>Weight (%)</th>
                    <th>Grade (%)</th>
                    <td><button onClick={addGrades}>+</button></td>
                </tr>
                {datas.map((item, index) => (
                    <tr key={index}>
                        <td><input 
                            name="courseItem2"
                            data-id={index}
                            type="number"
                            value={item.courseItem2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="dueDate2"
                            data-id={index}
                            type="date"
                            value={item.dueDate2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><p>here is where the countdown till the due date will go</p></td>
                        <td><input 
                            name="weight2"
                            data-id={index}
                            type="number"
                            value={item.weight2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><input 
                            name="actualGrade2"
                            data-id={index}
                            type="number"
                            value={item.actualGrade2}
                            onChange={handleOnChangeGrades}/>
                        </td>
                        <td><button onClick={addGrades}>+</button></td>
                        <td><button onClick={() => handleDelRow(item)}>-</button></td>
                    </tr>
                ))}
            </table>

            <Route path="/lab2" component={Lab2}></Route>
        </div>
    )

}

export default Course2
