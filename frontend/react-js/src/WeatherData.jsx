import {useState} from "react";

function WeatherData({cityWeather, unit}){
    if(!cityWeather){
        return <div>Loading...</div>
    }
    const getWindDirection = (windDegree) => {
        if(windDegree > 0 && windDegree < 90){
            return "NE"
        }
        else if(windDegree > 90 && windDegree < 180){
            return "SE"
        }
        else if(windDegree > 180 && windDegree < 270){
            return "SW"
        }
        else if(windDegree > 270 && windDegree < 360){
            return "NW"
        }
        else if(windDegree == 0){
            return "N"
        }
        else if(windDegree == 90){
            return "E"
        }
        else if(windDegree == 180){
            return "S"
        }
        else if(windDegree == 270){
            return "W"
        }
    }
    const useMetric = () => unit=="Metric"
    return (
        <>
            <div className="row-span-1 col-span-1"></div>
            <div className="col-span-2 row-span-2 ">
                <img className="w-100 h-100" src={cityWeather.condition.icon}/>
                <div>{cityWeather.condition.text}</div>
            </div>
            <div className="col-span-4 grid-span-1">
                <div className="grid grid-rows-4 grid-cols-3">
                    <div>Temperature</div>
                    <div>Perceived temp. [{useMetric() ?"°C" : "F"}]</div>
                    <div>Wind [{useMetric() ?"Kph" : "Mph"}]</div>

                    <div>{useMetric() ? cityWeather.tempC + " °C" : cityWeather.tempF + " F"}</div>
                    <div>{useMetric() ? cityWeather.feelsLikeC + " °C" : cityWeather.feelsLikeF + " F"}</div>
                    <div>{useMetric() ? cityWeather.windSpeedKm + " Kph" : cityWeather.windSpeedM + " Mph"} / {getWindDirection(cityWeather.windDegree)}</div>

                    <div>Atm. pressure</div>
                    <div>Cloudiness</div>
                    <div>Humidity</div>

                    <div>{cityWeather.pressureHpa + " hPa"}</div>
                    <div>{cityWeather.cloud + " %"}</div>
                    <div>{cityWeather.humidity + " %"}</div>
                </div>
            </div>
        </>
    )
}

export default WeatherData;