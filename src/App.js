import "./styles.css";
import Search from "./Search";
import Wind from "./Wind";
import Humidity from "./Humidity";
import CurrentTemperature from "./CurrentTemperature";
import Footer from "./Footer";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="row">
          <Search />
        </div>
        <h1>Sunday</h1>
        <h2>January 8, 15:00</h2>

        <div className="row">
          <CurrentWeather />
          <div className="col" id="current-temperature">
            <CurrentTemperature />
          </div>

          <div className="col">
            <Humidity />
          </div>
          <div className="col">
            <Wind />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
