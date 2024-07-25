// src/components/WeatherApp/ForecastCard.tsx
import React, { useState } from 'react';
import styles from './ForecastCard.module.css';

interface ForecastCardProps {
  forecast: any;
  isMorning: boolean;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast, isMorning }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.forecastCard} onClick={toggleExpand}>
      <h3>{new Date(forecast.dt * 1000).toLocaleDateString()}</h3>
      <p>{isMorning ? 'Утро' : 'День'}</p>
      <p>{forecast.weather[0].description}</p>
      <h4>{forecast.main.temp}°C</h4>
      {isExpanded && (
        <div className={styles.details}>
          <p>Скорость ветра: {forecast.wind.speed} м/с</p>
          <p>Влажность: {forecast.main.humidity}%</p>
          <p>Давление: {forecast.main.pressure} гПа</p>
        </div>
      )}
    </div>
  );
};

export default ForecastCard;
