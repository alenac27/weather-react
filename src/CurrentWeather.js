import React from "react";
import "./CurrentWeather.css";
import Sunny from "./sunny.png";

export default function CurrentWeather(props) {
  return (
    <div className="col-lg-3">
      <div>
        <img src={Sunny} alt="sunny-icon" />{" "}
      </div>
      <div id="description">Clear Sky</div>
    </div>
  );
}
