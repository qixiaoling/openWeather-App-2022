import React, {useEffect, useState} from 'react';
import axios from "axios";
import {createDateString} from "../../helper/createDateString";
import {kelvinToCelsius} from "../../helper/kelvinToCelsius";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';
function Forecasts({coordinates}) {
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
        <>
            {error && <span>Oops! Something went wrong!</span>}
            {!forecastData && !error && <span>Please enter the city name first.</span>}
            {forecastData.map((forecast)=>{
                return(
                    <article key={forecast.dt}>
                        <p>{createDateString(forecast.dt)}</p>
                        <p>{forecast.weather[0].description}</p>
                        <p>{kelvinToCelsius(forecast.temp.day)}</p>
                    </article>
                )
            })}
        </>

    )
}
export default Forecasts;