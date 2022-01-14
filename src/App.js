import React, {useState, useEffect, useDebugValue} from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/SearchBar";
import axios from "axios";
import Forecasts from "./Page/Forecasts/Forecasts";


const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function App() {
    const [weatherData, setWeatherData] = useState({});//is object that contains data
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(location) {
            fetchDataWeather();
        }
    },[location])

    async function fetchDataWeather() {
        setLoading(true);
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiMonkey}&lang=nl`);
            console.log(result.data);
            setWeatherData(result.data);
        } catch (e) {
            console.error(e);
        }
        setLocation(false);
    }




    return (
        <div className="app-container">
            <div className='app-content'>
                <div className='app-top'>
                    <SearchBar setLocationBar={setLocation}/>
                    <div className='current-data'>
                        {Object.keys(weatherData).length>0 &&
                        <>
                            <h2>{weatherData.weather[0].description}</h2>
                            <p>{weatherData.name}</p>
                            <p>{weatherData.main.temp}</p>
                        </>
                        }
                    </div>
                </div>
                <div className='app-bottom'>
                    <Forecasts coordinates = {weatherData && weatherData.coord}/>
                </div>


            </div>

        </div>
    );
}

export default App;
