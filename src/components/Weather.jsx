import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const Weather = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputVal, setInputVal] = useState('')

  const getWeatherData = async () => {
    try {
      const { data } =
        coordinates.latitude !== 0 &&
        (await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?${
            city !== null
              ? `q=${city}`
              : `lat=${coordinates.latitude}&lon=${coordinates.longitude}`
          }&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        ));

      if (data && data.name) {
        setCity(data.name);
        setWeather({
          location: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          weather_description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: (data.main.temp - 273.15).toFixed(0),
          temperature_min: (data.main.temp_min - 273.15).toFixed(2),
          temperature_max: (data.main.temp_max - 273.15).toFixed(2),
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
      }
    } catch (e) {
      localStorage.removeItem("city");
      console.log(e);
    }
  };

  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((x) =>
        setCoordinates({
          latitude: x.coords.latitude,
          longitude: x.coords.longitude,
        })
      ),
    []
  );

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, [coordinates, city]);

  useEffect(() => {
    city !== null && localStorage.setItem("city", city);
  }, [city]);

  const handleCity = () => {
    setCity(inputVal)
    setIsInputVisible(false)
  }

  return (
    <section
      className="weather-container"
      onKeyDown={(e) => e.code === "Enter" && setIsInputVisible(false)}
    >
      {weather !== null && (
        <>
          <div className="temp-container">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              width="50px"
              height="50px"
              alt="weather-icon"
            />
            {weather.temperature}°C
          </div>
          <span className="weather-location">{weather.location}</span>
        </>
      )}
      {isInputVisible && (
            <div>
              <input
                className="input-box"
                type="text"
                placeholder="Enter city name"
                onKeyDown={(e) => e.code === "Enter" && setCity(e.target.value) && setIsInputVisible(false)}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button className="svg-btn" onClick={() => setIsInputVisible(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon"
                  style={{
                    width: "1em",
                    height: "1em",
                    verticalAlign: "middle",
                    fill: "white",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                >
                  <path d="M810.66 170.66q18.33 0 30.495 12.165t12.165 30.495q0 18.002-12.33 30.33L572.315 511.98 840.99 780.308q12.329 12.33 12.329 30.331 0 18.33-12.165 30.495T810.66 853.3q-18.002 0-30.331-12.329L512 572.293 243.671 840.97q-12.329 12.33-30.33 12.33-18.33 0-30.496-12.166T170.68 810.64q0-18.002 12.33-30.33l268.676-268.33L183.01 243.652q-12.329-12.33-12.329-30.331 0-18.33 12.165-30.495t30.495-12.165q18.002 0 30.331 12.329L512 451.666l268.329-268.677q12.329-12.33 30.33-12.33z" />
                </svg>
              </button>
            </div>
          )}
      <button className="weather-btn" onClick={() => { isInputVisible ? handleCity() : setIsInputVisible(true) }}>
        {isInputVisible ? 'update' : 'change city'}
      </button>
      
    </section>
  );
};
export { Weather };
