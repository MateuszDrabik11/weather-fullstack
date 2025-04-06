import {useState} from "react";

function WeatherData({cityWeather}){
    if(!cityWeather){
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="row-span-1 col-span-1"></div>
            <div className="col-span-2 row-span-2 ">
                <img className="w-100 h-100" src={cityWeather.condition.icon}/>
                <div>{cityWeather.condition.text}</div>
            </div>
            <div className="col-span-4 ">
                <div>a</div>
            </div>
        </>
    )
}

export default WeatherData;