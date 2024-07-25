import React from 'react';
import WeatherApp from './components/WhetherApp/WeatherApp';
import './App.css';
import Header from './components/WhetherApp/HeaderOLD/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherApp />
    </div>
  );
}

export default App;