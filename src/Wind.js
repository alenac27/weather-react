import React from "react";
import "./Wind.css";

export default function Wind(props) {
  if (!props.data || !props.data.wind) {
    return null;
  }

  return (
    <div className="additional-weather-data">
      <div className="wind-title">Wind</div>
      <div className="wind-speed">{props.data.wind}</div>
    </div>
  );
}
