import React, { useState } from "react"

function WeatherOverview ({weatherData}) {

  return (
    <div className="card">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p className="welcome">Overview.</p>
          </div>
        ) : (
          <div>
            <p className="cityname">{weatherData.name}, {weatherData.sys.country}</p>
            <p>Weather Overview</p>
          </div>
        )}
    </div>
  );
}

export default WeatherOverview