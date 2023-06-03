import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentTemperature from "./CurrentTemperature";

export default function Search(props) {
  const [weatherData, setWeatherData] = React.useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="col-6">
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="enter-city-input"
                placeholder="Enter you city..."
                aria-label="Enter you city..."
                aria-describedby="basic-addon2"
                onChange={handleCityChange}
              />
              <input type="submit" id="submit-button" value="Change city" />
              <button id="location-button">Your location</button>
            </div>
          </form>
        </div>
        <CurrentTemperature data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
