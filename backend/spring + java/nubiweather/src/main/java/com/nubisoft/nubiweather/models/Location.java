package com.nubisoft.nubiweather.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Location(String name, String region, String country,
                       @JsonProperty("lat") Double latitude,
                       @JsonProperty("lon") Double longitude,
                       @JsonProperty("tz_id") String id,
                       @JsonProperty("localtime_epoch") Integer localtimeEpoch
                        , String localtime) {}
