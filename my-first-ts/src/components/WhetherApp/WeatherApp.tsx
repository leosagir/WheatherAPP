
import React, { useState } from 'react';
import WeatherCard from './WheatherCard';
import styles from './WeatherApp.module.css';

const WeatherApp = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiKey = '5aae18deaad3d63e76a447844a33b93a';

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className={styles.weatherApp}>
      <div className={styles.form} >
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>Search</button></div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.card}>
        {weatherData && (
          <WeatherCard
            city={weatherData.name}
            temperature={weatherData.main.temp}
            description={weatherData.weather[0].description}
            icon={weatherData.weather[0].icon}
            windSpeed={weatherData.wind.speed}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
