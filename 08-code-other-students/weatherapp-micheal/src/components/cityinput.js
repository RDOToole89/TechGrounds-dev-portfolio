import React, { useState } from 'react';

export default function Cityinput({ setWeatherData, setCity, cityValue }) {
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleKeyPress = (event) => {
    if (event.key !== 'Enter') return;

    setCity(event.target.value);
  };

  return (
    <div className='container'>
      <input
        className='input'
        placeholder='Enter City...'
        // onChange={(e) => setCity(e.target.value)}
        value={cityValue}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
