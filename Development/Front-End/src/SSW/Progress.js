// JavaScript source code
import React, { useState, useEffect } from "react";
const Progress = ({ percentage }) => {

    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${percentage}%`
        }

        setStyle(newStyle);
    }, 200);
    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {percentage}%
            </div>

        </div>
    );
};


export default Progress;