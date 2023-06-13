import { useState } from 'react';
import '../App.css'
import axios from 'axios';
import WeatherCard from './WeatherCard';
function Main() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})
    const [error, setError] = useState('')
    const apikey = "0671ceb041e01c1249423e4c7338fc92"
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    const handleSearch = async () => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
                .then(res => setWeather(res.data))
        }
        // console.log(weather);
    return (
        <>
            <div className="app">
                <div className='container'>
                    <input type="text" placeholder='Enter your city name' className='search-input' value={city} onChange={handleChange}></input>
                    <button type="button" onClick={handleSearch} className="btn btn-outline-dark mx-3">Go!</button>
                    {error ? (
                        <h1 className='error-message'>{error}</h1>) : (
                        <WeatherCard weather={weather} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;