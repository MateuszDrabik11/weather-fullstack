import {useState} from "react";
import HourlyForecast from "./HourlyForecast.jsx";


function DayCard({day, date, onClose , unit }) {
    const useMetric = () => unit=="Metric"
    const [showHourly, setShowHourly] = useState(false)
    if (showHourly) {
        return (
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-2 rounded-md text-black gap-4">
                    <div className="flex gap-4 p-4 flex-col max-h-[400px] overflow-y-scroll md:flex-row md:flex-wrap md:overflow-x-auto">
                        {day.byHour.map((hour) => {
                                return (
                                    <HourlyForecast hour={hour} unit={unit}></HourlyForecast>
                                )
                            }
                        )}
                    </div>
                    <button className="border border-solid border-black rounded bg-red-700 " onClick={() => {setShowHourly(false)}}>Close</button>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center"
                 onClick={(e) => e.stopPropagation()}>

                <div className="flex flex-col gap-4 bg-white p-2 rounded-md text-black">
                    <div className="flex flex-row gap-4 p-2">
                        <img src={day.condition.icon} width={64}/>
                        <div>{date}</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>Avg. Temp : {useMetric() ? day.tempC + " °C" : day.tempF + " F"}</div>
                        <div>Min. Temp : {useMetric() ? day.minTempC + " °C" : day.minTempF + " F"}</div>
                        <div>Max. Temp : {useMetric() ? day.maxTempC + " °C" : day.maxTempF + " F"}</div>
                        <div>Wind : {useMetric() ? day.windSpeedKm + " Kph" : day.windSpeedMiles + " Mph"}</div>
                        <div>Rain : {day.precipitationMm} mm/m<sup>3</sup></div>
                        <div>Humidity : {day.humidity} %</div>
                        <div>Chance of rain : {day.chanceOfRain} %</div>
                        <div>Chance of snow : {day.chanceOfSnow} %</div>
                        <div>Sunrise : {day.astro.sunrise }</div>
                        <div>Sunset : {day.astro.sunset }</div>
                        <div>Moonrise : {day.astro.moonrise }</div>
                        <div>Moonset : {day.astro.moonset }</div>
                    </div>
                    <button className="border border-solid border-black rounded bg-blue-400" onClick={()=>setShowHourly(true)}>Hourly forecast</button>
                    <button className="border border-solid border-black rounded bg-red-700" onClick={onClose}>Close</button>
                </div>

            </div>
        );
    }
}

export default DayCard;