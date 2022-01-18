import React, {useState, useEffect} from 'react';
import axios from "axios";
import {kelvinToCelsius} from "../../helper/kelvinToCelsius";
import IconMapper from "../../helper/iconMapper";
import createTimeString from "../../helper/createTimeString";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function CurrentDay({coordinates}) {
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
        <div className='currentDay-container'>

            {currentData.map((hour) => {
                return (
                    <article key={hour.dt} className='single-hour'>
                        <div className='hour-data'>
                            <p>{kelvinToCelsius(hour.temp)}</p>
                            <p>{IconMapper(hour.weather[0].main)}</p>
                            <p>{hour.weather[0].description}</p>
                        </div>
                        <div className='hour'>
                            <p>{createTimeString(hour.dt)}</p>
                        </div>

                    </article>
                )
            })}

        </div>
    )
}

export default CurrentDay;