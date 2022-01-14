import React, {useEffect, useState} from 'react';
import axios from "axios";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';
function Forecasts({coordinates}) {
    const [forecastData, setForecastData] = useState({});
    useEffect(()=>{
        async function fetchForecastData() {
            try{
                const endPoint=`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates?.lat}&lon=${coordinates?.lon}&appid=${apiMonkey}`
                const result = await axios.get(endPoint);
                console.log(result.data);
                setForecastData(result.data);
            }catch(e){
                console.log(e);
            }
        }
        if(coordinates){
            fetchForecastData()
        }

    },[coordinates])
    return(
        <h1>hi</h1>
    )
}
export default Forecasts;