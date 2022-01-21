import './css/App.css';

import WeatherCard from './pages/WeatherCard';
import WeatherDetail from './pages/WeatherDetail';
import WeatherOverview from './pages/WeatherOverview';
import Pagebuttons from './components/pagebuttons';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setWeatherData] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&lang=en&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
          setCity('');
        });
    }
  }, [city]);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<WeatherCard weatherData={data} setCity={setCity} cityValue={city} />}
        />
        <Route path='/WeatherDetail' element={<WeatherDetail />} />
        <Route path='/WeatherOverview' element={<WeatherOverview />} />
      </Routes>
    </div>
  );
}

export default App;
