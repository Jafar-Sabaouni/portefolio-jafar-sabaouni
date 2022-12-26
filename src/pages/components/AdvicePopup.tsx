import React, { useEffect, useState } from 'react';
import styles from "../Home.module.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export interface advice {
    slip: Slip;
  }
  export interface Slip {
    id: number;
    advice: string;
  }
  
  const AdvicePopup = () => {
    const [apiResponce, setApiResponce] = useState<advice | undefined>();
    const [closePopup, setClosePopup] = useState<boolean>(true);
    const fetchAdvice = async () => {
      // random color for background https://www.colr.org/json/color/random
      let result = await fetch(`https://api.adviceslip.com/advice`);
      let json: advice = await result.json();
      setApiResponce(json);
    }
    useEffect(() => {
      fetchAdvice();
    }, []);
    return (
      <div>
        {closePopup &&
          <div className={styles.AdvicePopup}>
            <button onClick={() => { setClosePopup(!closePopup) }} >x</button>
            <p>{apiResponce?.slip.advice}</p>
          </div>}
      </div>
    )
  }
  export default AdvicePopup;
  