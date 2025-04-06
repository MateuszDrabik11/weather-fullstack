import {useState} from "react";
import DayForecast from "./DayForecast.jsx";
import dayForecast from "./DayForecast.jsx";

function ForecastTable({cityForecast, unit}) {
    console.log(cityForecast);
    const useMetric = () => unit=="Metric"
    if (!cityForecast) {
        return <></>
    }
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-2 md:p-6 text-gray-800">
                <div className="text-xl flex flex-col items-center justify-between">Forecast in {cityForecast.location} for the next 7 days</div>
                <div className="flex flex-row flex-wrap p-2 gap-4">
                    {cityForecast.days.map((item)=>
                    {
                        return <><DayForecast day={item} unit={unit}/></>
                    })}
                </div>
            </div>
        </>
    );
}
export default ForecastTable;