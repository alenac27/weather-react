import "./styles.css";
import Search from "./Search";
import Wind from "./Wind";
import Humidity from "./Humidity";
import CurrentTemperature from "./CurrentTemperature";
import Footer from "./Footer";
import CurrentWeather from "./CurrentWeather";
import FormattedDate from "./FormattedDate";

export default function App(props) {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="row">
          <Search defaultCity="Berlin" />
        </div>
        <FormattedDate />
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
