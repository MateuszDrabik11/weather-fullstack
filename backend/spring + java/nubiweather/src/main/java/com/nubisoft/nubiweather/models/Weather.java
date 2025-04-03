package com.nubisoft.nubiweather.models;

public record Weather(String city, String country, String localtime, Double tempC, Double tempF,
                      Boolean isDay, Double windSpeedKm, Double windSpeedM,
                      Double windDegree, Double pressureHpa, Double feelsLikeC, Double feelsLikeF,
                      WeatherCondition condition, Double humidity, Integer uv, Double cloud){
    public Weather(RawCurrentData data)
    {
        this(
                data.location().name(),
                data.location().country(),
                data.location().localtime(),
                data.current().tempC(),
                data.current().tempF(),
                data.current().isDay() != 0,
                data.current().windKph(),
                data.current().windMph(),
                data.current().windDegree(),
                data.current().pressureMb(),
                data.current().feelsLikeC(),
                data.current().feelsLikeF(),
                data.current().condition(),
                data.current().humidity(),
                data.current().uv(),
                data.current().cloud()
        );

    }
}
