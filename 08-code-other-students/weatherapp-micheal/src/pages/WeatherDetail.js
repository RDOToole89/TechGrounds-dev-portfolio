import React, { useState } from "react"

function WeatherDetail ({weatherData}) {

  return (
    <div className="card">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p className="welcome">Welcome to WeatherApp please enter a City.</p>
          </div>
        ) : (
          <div>
            <p className="cityname">{weatherData.name}, {weatherData.sys.country}</p>
            <p>Weather Detail</p>
          </div>
        )}
    </div>
  );
}

export default WeatherDetail