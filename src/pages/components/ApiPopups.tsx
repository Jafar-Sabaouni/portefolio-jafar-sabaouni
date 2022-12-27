import React, { useEffect, useState } from 'react';
import styles from "./ApiPopups.module.css";


export interface advice {
  slip: Slip;
}
export interface Slip {
  id: number;
  advice: string;
}

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
export interface ageGuesApi {
  age:Number;
  name: string;
}
//https://api.agify.io/?name=jafar

const AdvicePopup = () => {
  const [apiAdvice, setApiAdvice] = useState<advice | undefined>();
  const [apiWeather, setApiWeather] = useState<weatherApi | undefined>();
  const [apiName, setApiName] = useState<ageGuesApi | undefined>();
  const [closePopup1, setClosePopup1] = useState<boolean>(true);
  const [closePopup2, setClosePopup2] = useState<boolean>(true);
  const [closePopup3, setClosePopup3] = useState<boolean>(true);
  const fetchAdvice = async () => {
    // random color for background https://www.colr.org/json/color/random
    let result = await fetch(`https://api.adviceslip.com/advice`);
    let json: advice = await result.json();
    setApiAdvice(json);
  }
  const fetchWeather = async () => {
    let result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Antwerp,BE&appid=b1a90ec4d94d84ecf2a3f2bb634b970d&units=metric`);
    let json: weatherApi = await result.json();
    setApiWeather(json);
  }
  const fetchAgeUsingName = async (Name:string) => {
    let result = await fetch(`https://api.agify.io/?name=${Name}`);
    let json: ageGuesApi = await result.json();
    setApiName(json);
  }
  useEffect(() => {
    fetchAdvice();
    fetchWeather()
  }, []);
  return (
    <div className={styles.popupContainer}>
      {closePopup1 &&
      <div className={styles.advicePopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup1(!closePopup1) }} >x</button>
          <p>advice:<br/>{apiAdvice?.slip.advice}</p>
        </div>
      </div>}
      {closePopup2 &&
      <div className={styles.WeatherPopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup2(!closePopup2) }} >x</button>
          <p>weather: {apiWeather?.name} <br/> description: {apiWeather?.weather[0].description}</p>

        </div>
      </div>}
      {closePopup3 &&
      <div className={styles.ageGuesPopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup3(!closePopup3) }} >x</button>
          <p>Age guesser: <input type="text" placeholder='name' onChange={(e)=>{fetchAgeUsingName(e.target.value)}}/><br/>{apiName&& `age:${apiName?.age}`}</p>
           
        </div>
      </div>}
    </div>
  )
}
export default AdvicePopup;
