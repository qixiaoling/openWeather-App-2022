import React, {useContext} from 'react';
import IconMapper from "../../helper/iconMapper";
import './WeatherDetails.css';
import {TempContext} from "../../Context/TempContextProvider";


function WeatherDetails({description, type, temp}) {
    const { kelvinToMetric} = useContext(TempContext)
    return(
            <div className='hour-data'>
                <span className='hour-image' >{IconMapper(type)}</span>
                <p>{description}</p>
                <p>{kelvinToMetric(temp)}</p>
            </div>
    )
}
export default WeatherDetails;