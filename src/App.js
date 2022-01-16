import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/SearchBar";
import axios from "axios";
import Forecasts from "./Page/Forecasts/Forecasts";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CurrentDay from "./Page/CurrentDay/CurrentDay";
import TabBarMenu from "./Component/TabBarMenu/TabBarMenu";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function App() {
    const [weatherData, setWeatherData] = useState({});//is object that contains data
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (location) {
            fetchDataWeather();
        }
    }, [location])

    async function fetchDataWeather() {
        setLoading(true);
        setError(false);
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiMonkey}&lang=nl`);
            console.log(result.data);
            setWeatherData(result.data);
        } catch (e) {
            console.error(e);
            setError(true);
        }
        setLocation(false);
        setLoading(false);
    }


    return (
        <>
            <div className="app-container">

                <div className='app-top'>
                    <SearchBar setLocationBar={setLocation}/>
                    {error && <span>Oops! This city does not exist.</span>}
                    {loading && <span>Loading...</span>}
                    <div className='current-data'>
                        {Object.keys(weatherData).length > 0 &&
                        <>
                            <h3>{weatherData.weather[0].description}</h3>
                            <p>{weatherData.name}</p>
                            <p className="current-temp">{weatherData.main.temp}</p>
                        </>
                        }
                    </div>
                </div>

                <Router>
                    <div className='app-bottom'>
                        <TabBarMenu/>
                        <Switch>
                            <Route to='/' exact={true}>
                                <CurrentDay/>
                            </Route>
                            <Route to='/coming-week' exact={true}>
                                <Forecasts coordinates={weatherData && weatherData.coord}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </div>

        </>

    );
}

export default App;
