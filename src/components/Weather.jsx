import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"

const Weather = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [isInputVisible, setIsInputVisible] = useState(false);

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
    } catch (e) {
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

  useEffect(() => { city !== null && localStorage.setItem("city", city)}, [city]);


  return (
    <div
      className='weather-container'
      onKeyDown={(e) => e.code === "Enter" && setIsInputVisible(false)}
    >
      {weather !== null && (
        <>
          <div className='temp-container'>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              width='50px'
              height='50px'
              alt='weather-icon'  
            />
            {weather.temperature}°C
          </div>
          {isInputVisible && (
            <input
              type='text'
              placeholder='Enter city name'
              onKeyDown={(e) => e.code === "Enter" && setCity(e.target.value)}
            />
          )}
          {weather.location}
        </>
      )}
      <button className="weather-btn" onClick={() => setIsInputVisible(true)}>Change city</button>
    </div>
  );
};
export { Weather };
