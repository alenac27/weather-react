import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="col-6">
      <form id="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="enter-city-input"
            placeholder="Enter you city..."
            aria-label="Enter you city..."
            aria-describedby="basic-addon2"
          />
          <input type="submit" id="submit-button" value="Change city" />
          <button id="location-button">Your location</button>
        </div>
      </form>
    </div>
  );
}
