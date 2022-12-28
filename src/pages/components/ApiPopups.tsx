import React from 'react';
import styles from "./ApiPopups.module.css";
import AgeGuesPopup from './AgeGuesPopup';
import WeatherPopup from './WeatherPopup';
import AdvicePopup from './AdvicePopup';

const ApiPopup = () => {

  return (
    <div className={styles.popupContainer}>
      <AdvicePopup/>
      <WeatherPopup/>
      <AgeGuesPopup/>
    </div>
  )
}
export default ApiPopup;
