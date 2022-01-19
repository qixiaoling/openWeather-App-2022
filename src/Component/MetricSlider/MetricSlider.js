import React from 'react';
import './MetricSlider.css';

function MetricSlider() {
    return(
        <div className='metric-container'>
            <p> C &deg;</p>
            <input type='checkbox' className='metric-toggle'/>
            <p>&deg; F</p>
        </div>
    )
}
export default MetricSlider