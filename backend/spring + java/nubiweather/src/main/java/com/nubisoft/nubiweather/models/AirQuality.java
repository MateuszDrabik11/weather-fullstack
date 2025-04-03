package com.nubisoft.nubiweather.models;

public record AirQuality(Double co, Double no2, Double o3, Double so2, Double pm2_5, Double pm10,
                         Integer usEpaIndex, Integer gbDefraIndex) {
}
