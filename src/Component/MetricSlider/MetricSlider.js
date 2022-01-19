import React, {useState, useEffect, useContext} from 'react';
import './MetricSlider.css';
import {TempContext} from "../../Context/TempContextProvider";


function MetricSlider() {
    const [checked, toggleChecked] = useState(true);
    const {toggleTemp} = useContext(TempContext);

    useEffect(() => {
        toggleTemp();
    }, [checked]);

    return(
        <div className='metric-container'>
            <p> C &deg;</p>
            <input type='checkbox' className='metric-toggle'
                   onChange={()=> toggleChecked(!checked)}
                   checked={checked}
            />
            <p>&deg; F</p>
        </div>
    )
}
export default MetricSlider