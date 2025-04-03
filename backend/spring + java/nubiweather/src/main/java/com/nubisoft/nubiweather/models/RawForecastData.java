package com.nubisoft.nubiweather.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.ArrayList;

public record RawForecastData(Location location, WeatherData current,
                              RawForecast forecast) {
}

record RawForecast (
        @JsonProperty("forecastday") ArrayList<ForecastDay> forecastDays
) { }

record ForecastDay(
    @JsonProperty("date")String date,
    @JsonProperty("date_epoch") Integer dateEpoch,
    DayRawData day,
    AstroRawData astro,
    @JsonProperty("hour") ArrayList<WeatherData> forecastByHours
) {}

record DayRawData(
        @JsonProperty("maxtemp_c") Double maxTempC,
        @JsonProperty("maxtemp_f") Double maxTempF,
        @JsonProperty("mintemp_c") Double minTempC,
        @JsonProperty("mintemp_f") Double minTempF,
        @JsonProperty("avgtemp_c") Double avgTempC,
        @JsonProperty("avgtemp_f") Double avgTempF,

        @JsonProperty("maxwind_kph") Double maxWindSpeedKph,
        @JsonProperty("maxwind_mph") Double maxWindSpeedMph,
        @JsonProperty("totalprecip_mm") Double totalPrecipitationMm,
        @JsonProperty("totalprecip_in") Double totalPrecipitationIn,
        @JsonProperty("totalsnow_cm") Double totalSnow,
        @JsonProperty("avgvis_km") Double avgVisibilityKm,
        @JsonProperty("avgvis_miles") Double avgVisibilityMiles,
        @JsonProperty("avghumidity") Double avgHumidity,
        @JsonProperty("daily_will_it_rain") Integer willRain,
        @JsonProperty("daily_will_it_snow") Integer willSnow,
        @JsonProperty("daily_chance_of_snow") Integer chanceOfSnow,
        @JsonProperty("daily_chance_of_rain") Integer chanceOfRain,
        WeatherCondition condition,
        Integer uv
) { }

record AstroRawData(
        String sunrise,String sunset,
        String moonrise, String moonset,
        @JsonProperty("moon_phase") String moonPhase,
        @JsonProperty("moon_illumination") Integer moonIllumination, //percentage
        @JsonProperty("is_sun_up") Integer isCurrentlySunUp,
        @JsonProperty("is_moon_up") Integer isCurrentlyMoonUp
){}