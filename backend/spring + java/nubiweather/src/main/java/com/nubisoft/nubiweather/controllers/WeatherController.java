package com.nubisoft.nubiweather.controllers;

import com.nubisoft.nubiweather.models.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WeatherController {

    @Value("${api}")
    private String apiKey;
    private final RestClient restClient;

    @RequestMapping("/")
    public BasicMessage index() {
        return new BasicMessage("Nubiweather API");
    }
    @RequestMapping("/realtime-weather")
    public List<Weather> realtimeWeahter() {
        RawCurrentData gliwice = this.restClient.get().uri("/current.json?q=Gliwice&lang=en&key="+apiKey)
                .retrieve().body(RawCurrentData.class);
        RawCurrentData hamburg = this.restClient.get().uri("/current.json?q=Hamburg&lang=en&key="+apiKey)
                .retrieve().body(RawCurrentData.class);
        if (gliwice == null || hamburg == null) {
            return new ArrayList<>();
        }
        ArrayList<Weather> weathers = new ArrayList<>();
        weathers.add(new Weather(gliwice));
        weathers.add(new Weather(hamburg));
        return weathers;
    }

    @RequestMapping("/forecast-weather")
    public List<Forecast> forecastWeather() {
        int days = 7;
        RawForecastData gliwice = this.restClient.get().uri("/forecast.json?q=Gliwice&days="+ days + "&key=" + apiKey).retrieve().body(RawForecastData.class);
        RawForecastData hamburg = this.restClient.get().uri("/forecast.json?q=Hamburg&days="+ days + "&key=" + apiKey).retrieve().body(RawForecastData.class);

        if (gliwice == null || hamburg == null) {
            return new ArrayList<>();
        }
        ArrayList<Forecast> forecasts = new ArrayList<>();
        forecasts.add(ForecastBuilder.build(gliwice));
        forecasts.add(ForecastBuilder.build(hamburg));
        return forecasts;
    }

    public WeatherController() {
        this.restClient = RestClient.builder().baseUrl("https://api.weatherapi.com/v1").build();
    }
}