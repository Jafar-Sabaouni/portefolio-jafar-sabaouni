import React, { useEffect, useState } from 'react';
import styles from "./ApiPopups.module.css";

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface weatherApi {
  weather: Weather[];
  name: string;
}

const WeatherPopup = () => {
  const [apiWeather, setApiWeather] = useState<weatherApi | undefined>();
  const [closePopup, setClosePopup] = useState<boolean>(true);
  const fetchWeather = async () => {
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Antwerp,BE&appid=b1a90ec4d94d84ecf2a3f2bb634b970d&units=metric`);
    let json: weatherApi = await result.json();
    setApiWeather(json);
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      {closePopup &&
      <div className={styles.WeatherPopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup(false) }} >x</button>
          <p>city: {apiWeather?.name} <br/> weather: {apiWeather?.weather[0].description}</p>
        </div>
      </div>}
    </>
  );
};

export default WeatherPopup