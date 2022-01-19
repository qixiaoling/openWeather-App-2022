import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/SearchBar";
import axios from "axios";
import ForecastTab from "./Page/Forecasts/ForecastTab";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TodayTab from "./Page/TodayTab/TodayTab";
import TabBarMenu from "./Component/TabBarMenu/TabBarMenu";
import MetricSlider from "./Component/MetricSlider/MetricSlider";
import {TempContext} from "./Context/TempContextProvider";

const apiMonkey = 'e95585502d1432e56ded4de2298185a9';

function App() {
    const [weatherData, setWeatherData] = useState({});//is object that contains data
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { kelvinToMetric } = useContext(TempContext);
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
                            <p className="current-temp">{kelvinToMetric(weatherData.main.temp)}</p>
                        </>
                        }
                    </div>
                </div>

                <Router>
                    <div className='app-bottom'>
                        <div className='option-wrapper'>
                            <TabBarMenu/>
                            <MetricSlider/>
                        </div>
                        <Switch>
                            <Route path='/today' exact={true}>
                                <TodayTab coordinates={weatherData && weatherData.coord}/>
                            </Route>
                            <Route path='/coming-week' exact={true}>
                                <ForecastTab coordinates={weatherData && weatherData.coord}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </div>

        </>

    );
}

export default App;
