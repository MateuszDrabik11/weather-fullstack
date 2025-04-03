package com.nubisoft.nubiweather.controllers;

import com.nubisoft.nubiweather.models.BasicMessage;
import com.nubisoft.nubiweather.models.RawCurrentData;
import com.nubisoft.nubiweather.models.Weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
public class WeatherController {

    @Value("${api}")
    private String apiKey;
    private final RestClient restClient;

    @RequestMapping("/")
    public BasicMessage index() {
        return new BasicMessage("Nubiweather API");
    }
    @RequestMapping("/realtime-weahter")
    public RawCurrentData realtimeWeahter() {
        RawCurrentData result = this.restClient.get().uri("/current.json?q=Gliwice&lang=pl&key="+apiKey)
                .retrieve().body(RawCurrentData.class);
        return result;
    }
    public WeatherController(Environment environment) {
        String apiUrl = "https://api.weatherapi.com/v1";
        this.restClient = RestClient.builder().baseUrl(apiUrl).build();
    }

}