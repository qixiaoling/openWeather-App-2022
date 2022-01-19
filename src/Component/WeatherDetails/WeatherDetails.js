import React from  'react';
import IconMapper from "../../helper/iconMapper";
import {kelvinToCelsius} from "../../helper/kelvinToCelsius";
import './WeatherDetails.css';

function WeatherDetails({description, type, temp}) {
    return(
            <div className='hour-data'>
                <p>{kelvinToCelsius(temp)}</p>
                <span className='hour-image' >{IconMapper(type)}</span>
                <p>{description}</p>
            </div>
    )
}
export default WeatherDetails;