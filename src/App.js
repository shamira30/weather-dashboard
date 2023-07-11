import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import CurrentWeatherDisplay from './components/CurrentWeatherDisplay';
import Forecast from './components/Forecast';
import SearchHistory from './components/SearchHistory';
import { fetchWeatherData, fetchForecastData } from './services/api';
import {
  saveSearchHistory,
  loadSearchHistory,
  clearSearchHistory,
} from './utils/storage';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = loadSearchHistory();
    setSearchHistory(history);
  }, []);

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeatherData(city);
      const forecastData = await fetchForecastData(city);
      const newWeather = {
        city: weatherData.name,
        date: new Date().toLocaleDateString(),
        icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
        temperature: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        uvIndex: weatherData.uvi,
      };
      const newForecast = forecastData.list
        .filter((data) => data.dt_txt.includes('12:00:00'))
        .map((data) => ({
          date: new Date(data.dt * 1000).toLocaleDateString(),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          temperature: data.main.temp,
          humidity: data.main.humidity,
        }));

      setWeather(newWeather);
      setForecast(newForecast);

      const updatedHistory = [city, ...searchHistory.filter((item) => item !== city)];
      setSearchHistory(updatedHistory);
      saveSearchHistory(updatedHistory);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    clearSearchHistory();
  };

  return (
    <div className="app">
      <CitySearch onSearch={handleSearch} />
      <div className="content">
        <div className="left-panel">
          <SearchHistory
            history={searchHistory}
            onClearHistory={handleClearHistory}
            onSearch={handleSearch}
          />
        </div>
        <div className="right-panel">
          <CurrentWeatherDisplay weather={weather} />
          <Forecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
