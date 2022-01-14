import React, {useEffect, useState} from 'react';
import axios from "axios";


const apiMonkey = 'e95585502d1432e56ded4de2298185a9';
function Forecasts({coordinates}) {
    const [forecastData, setForecastData] = useState([]);//is array
    useEffect(()=>{
        async function fetchForecastData() {
            try{
                const endPoint=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiMonkey}&lang=nl`;
                //this is the "One Call API" from openWeather

                const result = await axios.get(endPoint);
                console.log(result.data);
                setForecastData(result.data.daily.slice(1,6));//only need from tomorrow and on 5 days
            }catch(e){
                console.log(e);
            }
        }
        if(coordinates){
            fetchForecastData()
        }

    },[coordinates])

    function transferToDay (timeStamp) {
        const day = new Date (timeStamp * 1000);//seconds to milliseconds
        return day.toLocaleDateString('nl-NL', {weekday: "long"});//translate to Maandag
    }
    return(
        <>
            {forecastData.map((forecast)=>{
                return(
                    <article key={forecast.dt}>
                        <p>{transferToDay(forecast.dt)}</p>
                        <p>{forecast.weather[0].description}</p>
                        <p>{forecast.temp.day}</p>
                    </article>
                )
            })}
        </>

    )
}
export default Forecasts;