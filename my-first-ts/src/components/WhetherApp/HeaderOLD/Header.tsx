import React, { useState, useEffect } from 'react';
import './header.css';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
     
      <h3>Weather App</h3>
      <span>{currentTime}</span>
    </header>
  );
};

export default Header;