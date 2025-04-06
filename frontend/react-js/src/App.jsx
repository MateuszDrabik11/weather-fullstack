import {useEffect, useState} from "react";
import TopBar from "./TopBar.jsx";
import WeatherData from "./WeatherData.jsx";
import ForecastTable from "./ForecastTable.jsx";

function App() {

    let [currentWeather, setCurrentWeather] = useState([]);
    let [forecastData, setForecastData] = useState([]);
    let [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch("/realtime-weather");
                if (!response.ok) {
                    throw new Error("Could not fetch weather data.");
                }
                const data = await response.json();
                setCurrentWeather(data);
            } catch (err) {
                setFetchError(err.message);
            }
        }
        fetchWeather();
    }, []);


    useEffect(() => {
        async function fetchForecast() {
            try {
                const response = await fetch("/forecast-weather");
                if (!response.ok) {
                    throw new Error("Could not fetch weather data.");
                }
                const data = await response.json();
                setForecastData(data);
                console.log(data);
            } catch (err) {
                setFetchError(err.message);
            }
        }
        fetchForecast();
    }, []);

    if (fetchError) {
        return <div>Error: {fetchError.message}</div>;
    }

    let [unit, setUnit] = useState("Metric");
    let [city, setCity] = useState("Gliwice")
    const changeUnit = () => {
        if (unit == "Metric") {
            setUnit("Imperial")
        } else {
            setUnit("Metric")
        }
    }
    const changeCity = () => {
        if (city === "Gliwice") {
            setCity("Hamburg")
        } else {
            setCity("Gliwice")
        }
    }
    const getCityIndex = () => {
        if (city === "Gliwice") {
            return 0;
        } else {
            return 1;
        }
    }
    return (
        <>
            <div className="h-screen w-screen position-relative">
                <div className="flex justify-center flex-col items-center">
                    <div className="flex flex-col gap-4 bg-blue-400 p-2">
                        <TopBar changeCity={changeCity} city={city} fetchedTime={currentWeather[getCityIndex()]?.localtime} changeUnit={changeUnit} unit={unit}/>
                        <WeatherData cityWeather={currentWeather[getCityIndex()]} unit={unit}></WeatherData>
                        <ForecastTable cityForecast={forecastData[getCityIndex()]} unit={unit}></ForecastTable>
                    </div>
                </div>
            </div>
        </>
    );
}


export default App;
