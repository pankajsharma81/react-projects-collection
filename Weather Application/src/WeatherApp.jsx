import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Agra",
    feelsLike: 24.42,
    humidity: 17,
    temp: 25.38,
    tempMax: 25.38,
    tempMin: 25.38,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
