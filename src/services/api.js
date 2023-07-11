const API_KEY = 'YOUR_OPEN_WEATHER_API_KEY';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3021c38bca923186523bf377c1d69f1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a3021c38bca923186523bf377c1d69f1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw new Error('Failed to fetch forecast data');
  }
};
