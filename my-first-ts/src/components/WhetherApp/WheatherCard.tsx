import React from 'react';
import styles from './WeatherCard.module.css';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
}

const WeatherCard = ({ city, temperature, description, icon, windSpeed }: WeatherCardProps) => {
  return (
    <div className={styles.weatherCard}>
      <h2>{city}</h2>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <p>{description}</p>
      <h3>{temperature}°C</h3>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
