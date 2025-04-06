import {useEffect, useState} from "react";

function App() {

    let [currentWeather, setCurrentWeather] = useState([]);
    let [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch("/realtime-weather");
                if (!response.ok) {
                    throw new Error("Nie udało się pobrać danych pogodowych.");
                }
                const data = await response.json();
                console.log(data[0].city);
                setCurrentWeather(data);
            } catch (err) {
                setFetchError(err.message);
            }
        }
        fetchWeather();
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

    return (
        <>
            <div className="h-screen w-screen">
                <TopBar changeCity={changeCity} city={city} fetchedTime={"12:22"} changeUnit={changeUnit} unit={unit}/>
                <div className="flex justify-center flex-col gap-4 items-center">
                    <div className="grid grid-cols-4 grid-rows-3 gap-6 bg-blue-600">
                        <WeatherData cityWeather={currentWeather[0]}></WeatherData>
                    </div>
                </div>
            </div>
        </>
    );
}

import TopBar from "./TopBar.jsx";
import WeatherData from "./WeatherData.jsx";

export default App;
