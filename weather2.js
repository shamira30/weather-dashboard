import axios from "axios";

const APIKey = "a3021c38bca923186523bf377c1d69f1";

export default {
  searchTerms: function(query) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`
    );
  }
};

import { React, useState, useEffect } from "react";
import OpenWeatherAPI from "./utils/APIs/OpenWeatherAPI";

function Weather() {

    const [weatherData, setWeatherData] = useState({
        temp: "",
        humidity: "",
        windspeed: "",
    });

    useEffect(() => {
        console.log("useEffect");
        OpenWeatherAPI.searchTerms("Dubai")
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("no results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                const tempF = (res.data.main.temp - 273.15) * 1.80 + 32;
                const wd = {
                    temp: tempF.toFixed(2)+"°",
                    humidity: res.data.main.humidity,
                    windspeed: res.data.wind.speed,
                };
                setWeatherData(wd);
                console.log(res);
            })
    }, [])

    return ( 
        <div className= "container mx-auto bg-slate-400 h-36 rounded-xl">
            <h1>Weather</h1>
            <div className="flex flex-row justify-center pt-2" id="current-weather">
                <h3 id="current-city"></h3>
                <p>Temperature: <span id="temperature">{weatherData.temp}</span></p>
                <p>Humidity: <span id="humidity">{weatherData.humidity}%</span></p>
                <p>Wind Speed: <span id="wind-speed">{weatherData.windspeed}MPH</span></p>
            </div>
        </div>
    );
}
export default Weather;