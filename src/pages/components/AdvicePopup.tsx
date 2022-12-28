import React, { useEffect, useState } from 'react';
import styles from "./ApiPopups.module.css";

export interface advice {
  slip: Slip;
}
export interface Slip {
  id: number;
  advice: string;
}
const AdvicePopup = () => {
  const [apiAdvice, setApiAdvice] = useState<advice | undefined>();
  const [closePopup, setClosePopup] = useState<boolean>(true);
  const fetchAdvice = async () => {
    let result = await fetch(`https://api.adviceslip.com/advice`);
    let json: advice = await result.json();
    setApiAdvice(json);
  }
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <>
      {closePopup &&
      <div className={styles.advicePopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup(false) }} >x</button>
          <p>advice:<br/>{apiAdvice?.slip.advice}</p>
        </div>
      </div>}
    </>
  );
};
export default AdvicePopup;

