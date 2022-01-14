import React, {useState, useEffect, useDebugValue} from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar";
import axios from "axios";


const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function App() {
    const [weatherData, setWeatherData] = useState({});
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
        <div className="App-container">
            <SearchBar setLocationBar={setLocation}/>
        </div>
    );
}

export default App;
