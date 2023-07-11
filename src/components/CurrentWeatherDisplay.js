import React from 'react';

const CurrentWeatherDisplay = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { city, date, icon, temperature, humidity, windSpeed, uvIndex } = weather;

  return (
    <div className="current-weather-display">
      <h2>{city}</h2>
      <p>Date: {date}</p>
      <img src={icon} alt="Weather icon" />
      <p>Temperature: {temperature}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind Speed: {windSpeed}</p>
      <p>UV Index: {uvIndex}</p>
    </div>
  );
};

export default CurrentWeatherDisplay;
