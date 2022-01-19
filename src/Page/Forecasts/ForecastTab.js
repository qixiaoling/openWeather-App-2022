import React, {useEffect, useState} from 'react';
import axios from "axios";
import {createDateString} from "../../helper/createDateString";
import {kelvinToCelsius} from "../../helper/kelvinToCelsius";
import './ForecastTab.css';

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';
function ForecastTab({coordinates}) {
    const [forecastData, setForecastData] = useState([]);//is array
    const [error, setError] = useState(false);
    useEffect(()=>{
        async function fetchForecastData() {
            setError(false);
            try{
                const endPoint=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiMonkey}&lang=nl`;
                //this is the "One Call API" from openWeather

                const result = await axios.get(endPoint);
                console.log(result.data);
                setForecastData(result.data.daily.slice(1,6));//only need from tomorrow and on 5 days
            }catch(e){
                console.log(e);
                setError(true)
            }
        }
        if(coordinates){
            fetchForecastData()
        }

    },[coordinates])


    return(
        <div className='forecastTab-container'>
            {error && <span>Oops! Something went wrong!</span>}
            {!forecastData && !error && <span>Please enter the city name first.</span>}
            {forecastData.map((forecast)=>{
                return(
                    <article key={forecast.dt} className='single-forecast'>
                        <p className='forecast-weekday'>{createDateString(forecast.dt)}</p>
                        <div className='forecast-subGroup'>
                            <p className='forecast-temp'>{kelvinToCelsius(forecast.temp.day)}</p>
                            <p className='forecast-desc'>{forecast.weather[0].description}</p>
                        </div>
                    </article>
                )
            })}
        </div>

    )
}
export default ForecastTab;