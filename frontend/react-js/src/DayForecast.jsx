import {useState} from "react";
import DayCard from "./DayCard.jsx";


function DayForecast({day,unit}) {
    const useMetric = () => unit=="Metric"
    const date = new Date(day?.datetime);
    const format = {
        weekday: "short",
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }
    const [showCards, setShowCards] = useState(false);
    return (
        <div className="bg-white rounded-2xl shadow-md p-2 md:p-6 text-gray-800 flex flex-none flex-col cursor-pointer" onClick={() =>setShowCards(true)}>
            <div className="flex flex-col items-center justify-between">
                <div>{date.toLocaleString([],format)}</div>
                <img width={32} src={day.condition.icon}/>
                <div>{day.condition.text}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 items-center justify-between">
                <div>Min temp : {useMetric() ? day.minTempC + " °C" : day.minTempF + " F"}</div>
                <div>Max temp : {useMetric() ? day.maxTempC + " °C" : day.maxTempF + " F"}</div>
                <div>Wind : {useMetric() ? day.windSpeedKm + " Kph" : day.windSpeedMiles + " Mph"}</div>
                <div>Rain : {day.precipitationMm} mm/m<sup>3</sup></div>
            </div>
            {showCards && <DayCard day={day} unit={unit} date={date.toLocaleString([],format)} onClose={() => setShowCards(false)}></DayCard>}
        </div>
    )
}
export default DayForecast;