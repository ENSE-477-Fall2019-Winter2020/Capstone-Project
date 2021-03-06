// JavaScript source code
import React, { useState } from "react";

           

      
    

    const Hook_prototype = () => {
        const initial_state = [
        { id: 1, name: "SSW ACT", grade: 0 }
       
    ];
        const [datas, setDatas] = useState(initial_state);




        const handleDatasChange = event => {
            const tempDatas = [...datas];
            tempDatas[event.target.dataset.id][event.target.name] = event.target.value;

            setDatas(tempDatas);
        };

        const addNewData = () => {
            var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
            setDatas(prevCosts => [...prevCosts, { id: id,name: "", grade: 0 }]);
        };
const handleRowDel = (data) => {
       // var index = datas.indexOf(data);
        //const newDatas = datas.splice(index, 1);
       //setDatas(newDatas);

        let tempData = datas.filter(item => item.id !== data.id);
        setDatas(tempData);
    };
        const getTotalDatas = () => {
            return datas.reduce((total, item) => {              // reducer method, acc = total, curr = item
                return total + Number(item.grade);
            }, 0);
        };

        return (
            <div className="table">
                <div className="table-title">Semester Summary</div>
                <div className="table-content">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-data">
                                <div>Course</div>
                            </div>
                            <div className="table-data">
                                <div>Current Course Average</div>
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                        {datas.map((item, index) => (
                            <div className="table-row" key={index}>
                                <div className="table-data">
                                    <input
                                        name="name"
                                        data-id={index}
                                        type="text"
                                        value={item.name}
                                        onChange={handleDatasChange}
                                    />
                                </div>
                                <div className="table-data">
                                    <input
                                        name="grade"
                                        data-id={index}
                                        type="number"
                                        value={item.grade}
                                        onChange={handleDatasChange}
                                    />
                                </div>
                                <td className="del-cell">
                                    <input type="button" onClick={()=>handleRowDel(item)} value="X" className="del-btn" />
                                </td>
                            </div>
                        ))}
                        <div className="table-row">
                            <div className="table-data">
                                <button onClick={addNewData}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="table-footer">
                        <div className="table-row">
                            <div className="table-data">
                                <div>Total</div>
                            </div>
                            <div className="table-data">
                                <div>{getTotalDatas()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
           
export default Hook_prototype;