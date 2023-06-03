import React from "react";
import "./CurrentTemperature.css";
import FormattedDate from "./FormattedDate";

export default function CurrentTemperature(props) {
  if (!props.data || !props.data.city) {
    return null;
  }

  return (
    <div className="CurrentTemperature">
      <FormattedDate date={props.data.date} />
      <div className="current-city">{props.data.city}</div>
      <div className="current-temp">
        <strong id="current-degree">
          {Math.round(props.data.temperature)}
        </strong>
        <span className="units"> °C </span>
      </div>
    </div>
  );
}
