import React, {useContext} from 'react';
import IconMapper from "../../helper/iconMapper";
import './WeatherDetails.css';
import {TempContext} from "../../Context/TempContext";
import {kelvinToCelsius} from "../../helper/kelvinToCelsius";

function WeatherDetails({description, type, temp}) {
    // const {defineMethodsBasedOnSelectedMetric} = useContext(TempContext);
    return(
            <div className='hour-data'>
                <span className='hour-image' >{IconMapper(type)}</span>
                <p>{description}</p>
                <p>{kelvinToCelsius(temp)}</p>
            </div>
    )
}
export default WeatherDetails;