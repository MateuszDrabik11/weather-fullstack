import {useState} from "react";

function DayForecast({day,unit}) {
    const useMetric = () => unit=="Metric"
    const date = new Date(day?.datetime);
    const format = {
        weekday: "short",
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }
    return (
        <div className="bg-white rounded-2xl shadow-md p-2 md:p-6 text-gray-800 flex flex-none flex-col">
            <div className="flex flex-col items-center justify-between">
                <div>{date.toLocaleString([],format)}</div>
                <img width={32} src={day.condition.icon}/>
                <div>{day.condition.text}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 items-center justify-between">
                <div>Min. temp : {useMetric() ? day.minTempC + " °C" : day.minTempF + " F"}</div>
                <div>Max. temp : {useMetric() ? day.maxTempC + " °C" : day.maxTempF + " F"}</div>
                <div>Wind : {useMetric() ? day.windSpeedKm + " Kph" : day.windSpeedMiles + " Mph"}</div>
                <div>Rain : {day.precipitationMm} mm/m<sup>3</sup></div>
            </div>
        </div>
    )
}
export default DayForecast;