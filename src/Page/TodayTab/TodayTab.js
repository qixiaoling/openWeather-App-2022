import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import createTimeString from "../../helper/createTimeString";
import './TodayTab.css';
import WeatherDetails from "../../Component/WeatherDetails/WeatherDetails";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function TodayTab({coordinates}) {
    const [currentData, setCurrentData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (coordinates) {
            fetchCurrentData();
        }
    }, [coordinates])

    async function fetchCurrentData() {
        setLoading(true);
        setError(false);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,daily&appid=${apiMonkey}`);
            console.log(response.data);
            setCurrentData(
                [
                    response.data.hourly[3],
                    response.data.hourly[7],
                    response.data.hourly[9],
                ]
            );

        } catch (e) {
            console.error(e);
            setError(true);
        }
        setLoading(false);
        console.log(currentData);


    }

    return (
        <div className='todayTab-container'>
            {currentData.map((hour) => {
                return (
                    <article key={hour.dt} className='single-hour'>
                        <WeatherDetails temp={hour.temp} description={hour.weather[0].description} type={hour.weather[0].main}/>
                        <p className='hour'>{createTimeString(hour.dt)}</p>
                    </article>
                )
            })}

        </div>
    )
}

export default TodayTab;