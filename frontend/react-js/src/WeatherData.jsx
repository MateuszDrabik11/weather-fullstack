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
            <div className="bg-white rounded-2xl shadow-md p-6 text-gray-800">
                <div className="flex flex-col items-center justify-between">
                    <img width={64} src={cityWeather.condition.icon}/>
                    <div>{cityWeather.condition.text}</div>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-2 md:p-6 text-gray-800">
                <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-100 rounded-xl p-2 text-center">
                            <div>Temperature</div>
                            <div>Perceived temp [{useMetric() ?"°C" : "F"}]</div>
                            <div>Wind [{useMetric() ?"Kph" : "Mph"}]</div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-2 text-center">
                            <div>{useMetric() ? cityWeather.tempC + " °C" : cityWeather.tempF + " F"}</div>
                            <div>{useMetric() ? cityWeather.feelsLikeC + " °C" : cityWeather.feelsLikeF + " F"}</div>
                            <div>{useMetric() ? cityWeather.windSpeedKm + " Kph" : cityWeather.windSpeedM + " Mph"} / {getWindDirection(cityWeather.windDegree)}</div>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-2 text-center">
                            <div>Atm pressure</div>
                            <div>Cloudiness</div>
                            <div>Humidity</div>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-2 text-center">
                            <div>{cityWeather.pressureHpa + " hPa"}</div>
                            <div>{cityWeather.cloud + " %"}</div>
                            <div>{cityWeather.humidity + " %"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherData;