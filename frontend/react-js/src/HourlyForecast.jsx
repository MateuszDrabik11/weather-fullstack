
function HourlyForecast({hour, unit})
{
    const useMetric = () => unit=="Metric"
    let time = new Date(hour.datetime);
    return (
        <div className="flex flex-col md:flex-wrap place-items-center bg-gray-100">
            <div>{time.toLocaleString([],{ hour: '2-digit',
                minute: '2-digit'})}</div>
            <div>Temp : {useMetric() ? hour.tempC + " °C" : hour.tempF + " F"}</div>
            <div>Perceived temp : {useMetric() ? hour.feelsLikeC + " °C" : hour.feelsLikeF + " F"}</div>
            <div>Wind : {useMetric() ? hour.windSpeedKm + " Kph" : hour.windSpeedMiles + " Mph"}</div>
            <div>Cloudiness {hour.cloud} %</div>
        </div>
    )
}
export default HourlyForecast;