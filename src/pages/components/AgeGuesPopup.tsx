import React, { useState } from 'react';
import styles from "./ApiPopups.module.css";

export interface ageGuesApi {
  age:Number;
  name: string;
}

const AgeGuesPopup = () => {
  const [apiName, setApiName] = useState<ageGuesApi | undefined>();
  const [closePopup, setClosePopup] = useState<boolean>(true);
  const fetchAgeUsingName = async (Name:string) => {
    let result = await fetch(`https://api.agify.io/?name=${Name}`);
    let json: ageGuesApi = await result.json();
    setApiName(json);
  }
  return (
    <>
      {closePopup &&
      <div className={styles.ageGuesPopup}>
        <div className={styles.Popup}>
          <button onClick={() => { setClosePopup(false) }} >x</button>
          <p>Age guesser: <input type="text" placeholder='name' onChange={(e)=>{fetchAgeUsingName(e.target.value)}}/><br/>{apiName&& apiName.age !== null && `age:${apiName?.age}`}</p>
           
        </div>
      </div>}
    </>
  );
};

export default AgeGuesPopup;