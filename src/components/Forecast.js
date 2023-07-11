import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) {
    return null;
  }

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      {forecast.map((day) => (
        <div key={day.date}>
          <p>Date: {day.date}</p>
          <img src={day.icon} alt="Weather icon" />
          <p>Temperature: {day.temperature}</p>
          <p>Humidity: {day.humidity}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
