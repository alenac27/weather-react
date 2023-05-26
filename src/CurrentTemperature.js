import React from "react";
import "./CurrentTemperature.css";

export default function Wind() {
  return (
    <div>
      <div className="current-city">Berlin</div>
      <div className="current-temp">
        <strong id="current-degree">19</strong>
        <span className="units"> °C </span>
      </div>
    </div>
  );
}
