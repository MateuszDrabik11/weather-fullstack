package com.nubisoft.nubiweather.models;

import java.util.ArrayList;

public class ForecastBuilder {

    public static Forecast build(RawForecastData data) {
        String location = data.location().name();
        String localtime = data.location().localtime();
        ArrayList<DayForecast> forecastDays = new ArrayList<>();
        data.forecast().forecastDays().forEach(forecastDay -> {

            ArrayList<HourForecast> hourForecasts = new ArrayList<>();

            forecastDay.forecastByHours().forEach(forecast -> {
                hourForecasts.add(new HourForecast(
                        forecast.tempC(),
                        forecast.tempF(),
                        forecast.date(),
                        forecast.humidity().intValue(),
                        forecast.cloud().intValue(),
                        forecast.feelsLikeC(),
                        forecast.feelsLikeF(),
                        forecast.windKph(),
                        forecast.windMph()
                ));
            });
            DayForecast dayForecast = new DayForecast(
                    forecastDay.day().avgTempC(),
                    forecastDay.day().avgTempF(),
                    forecastDay.day().maxTempC(),
                    forecastDay.day().maxTempF(),
                    forecastDay.day().minTempC(),
                    forecastDay.day().minTempF(),
                    forecastDay.day().maxWindSpeedKph(),
                    forecastDay.day().maxWindSpeedMph(),
                    forecastDay.day().totalPrecipitationMm(),
                    forecastDay.date(),
                    forecastDay.day().condition(),
                    forecastDay.day().uv(),
                    forecastDay.day().avgHumidity().intValue(),
                    forecastDay.day().chanceOfSnow(),
                    forecastDay.day().chanceOfRain(),
                    forecastDay.astro(),
                    hourForecasts
                    );
            forecastDays.add(dayForecast);
        });
        return new Forecast(
                location,localtime,forecastDays
        );
    }
}
