package com.nubisoft.nubiweather.models;

import java.util.ArrayList;

public record Forecast(
        String location, String currentLocaltime, ArrayList<DayForecast> days
) {
    public Forecast() {
        this("null","null",new ArrayList<>());
    }
}

record DayForecast(
        Double tempC, Double tempF,
        Double maxTempC, Double maxTempF,
        Double minTempC, Double minTempF,
        Double windSpeedKm, Double windSpeedMiles,
        Double precipitationMm, String datetime, WeatherCondition condition, Integer uv,
        Integer humidity, Integer chanceOfSnow, Integer chanceOfRain,
        AstroRawData astro, ArrayList<HourForecast> byHour
) {}

record HourForecast(
        Double tempC, Double tempF,
        String datetime, Integer humidity, Integer cloud, Double feelsLikeC, Double feelsLikeF,
        Double windSpeedKm, Double windSpeedMiles
)
{

}