const WeatherCard = ({ weather }) => {
    return (
        <>
            <div className="weather-card">
                <h1 className="weather-name">{weather.name} {weather.sys?.country}</h1>
                <h2 className="weather-description">{weather.weather?.map(a => a.description)}</h2>
                <h1 className="weather-temp">{weather.main?.temp}℃</h1>
                <table>
                    <thead>
                    <tr className="table-row">
                        <td><p>Wind Speed:</p></td>
                        <td><p>{weather.wind?.speed} m/s</p></td>
                    </tr>
                    </thead>
                    <tr className="table-row">
                        <td><p>Pressure:</p></td>
                        <td><p>{weather.main?.pressure} hPs</p></td>
                    </tr>
                    <tr className="table-row">
                        <td><p>Humidity:</p></td>
                        <td><p>{weather.main?.humidity} %</p></td>
                    </tr>
                    <tr className="table-row">
                        <td><p>Minimum Temperature:</p></td>
                        <td><p>{weather.main?.temp_min} %</p></td>
                    </tr>
                    <tr className="table-row">
                        <td><p>Maximum Temperature:</p></td>
                        <td><p>{weather.main?.temp_max} %</p></td>
                    </tr>
                </table>
            </div>

        </>
    )
}
export default WeatherCard