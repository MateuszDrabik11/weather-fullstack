package com.nubisoft.nubiweather.models;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

public record WeatherData(
        @JsonAlias({"time_epoch","last_updated_epoch"}) Integer dateEpoch,
        @JsonAlias({"time","last_updated"}) String date,
        @JsonProperty("temp_c") Double tempC,
        @JsonProperty("temp_f") Double tempF,
        @JsonProperty("is_day") Integer isDay,
        WeatherCondition condition,
        @JsonProperty("wind_mph") Double windMph,
        @JsonProperty("wind_kph") Double windKph,
        @JsonProperty("wind_degree") Double windDegree,
        @JsonProperty("wind_dir") String windDirection,
        @JsonProperty("pressure_mb") Double pressureMb,
        @JsonProperty("pressure_in") Double pressureIn,
        @JsonProperty("precip_mm") Double precipMm,
        @JsonProperty("precip_in") Double precipIn,
        Double humidity,
        Double cloud,
        @JsonProperty("feelslike_c") Double feelsLikeC,
        @JsonProperty("feelslike_f") Double feelsLikeF,
        @JsonProperty("vis_km") Double visibilityKm,
        @JsonProperty("vis_miles") Double visibilityMiles,
        Integer uv,
        @JsonProperty("gust_mph") Double gustMph,
        @JsonProperty("gust_kph") Double gustKph,
        @JsonProperty("windchill_c") Double windchillC,
        @JsonProperty("windchill_f") Double windchillF,
        @JsonProperty("dewpoint_c") Double dewpointC,
        @JsonProperty("dewpoint_f") Double dewpointF,
        @JsonProperty("heatindex_c") Double heatindexC,
        @JsonProperty("heatindex_f") Double heatindexF
        )
{}
