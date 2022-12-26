import React, { useEffect, useState } from 'react';
import profilePicture from '../assets/JafarSabaouni.png';
import styles from "./Home.module.css";
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

const Home = () => {


  return (
    <main><AdvicePopup></AdvicePopup>
      <section className={styles.mainProfilePageDescription}>
        <div className={styles.mainProfilePageDescriptionText}>
          <h1>Hi I am Jafar</h1>

          <h3>curently a student at AP Hogeschool</h3>
          <p>I have been studying programming at AP Hogeschool since 2021, but my journey with this field began in 2019 when I started learning it as a hobby. I began by learning the basics of JavaScript, HTML, CSS, and a bit of Python. Over time, my passion for programming grew, and I continued to learn and expand my knowledge in this field. Today, I am a student at AP Hogeschool, where I am working towards a degree in programming. I am constantly striving to improve my skills and explore new possibilities in this field.</p>
          <p>At first, I thought I wanted to become a game developer, but as I dived deeper into the world of programming, I realized that there are so many other possibilities out there. I am excited to see where my passion for programming will take me, and I am eager to continue learning and growing as a developer.</p>
        </div>
        <div className={styles.mainProfileImageContainer}><img src={profilePicture} alt="" width='50%' /></div>
      </section>
      <section className={styles.mainProfilePageExperiences}>
        <h2>Skils</h2>
        <div className={styles.mainProfilePageExperiencesBar}>
          <CircularProgressbar
            value={90}
            text={`HTML`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#9BBFE0',
              textColor: '#9BBFE0',

            })}
          />
          <CircularProgressbar
            value={80}
            text={`CSS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#64C2A6',
              textColor: '#64C2A6',

            })}
          />
          <CircularProgressbar
            value={70}
            text={`Node.js`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#C6D68F',
              textColor: '#C6D68F',

            })}
          />
          <CircularProgressbar
            value={85}
            text={`React.js`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#2D87BB',
              textColor: '#2D87BB',

            })}
          />
          <CircularProgressbar
            value={85}
            text={`React.Native`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              textSize: '14',
              trailColor: '#09455c',
              pathColor: '#F66D44',
              textColor: '#F66D44',

            })}
          />

          <CircularProgressbar
            value={80}
            text={`JS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#C6D68F',
              textColor: '#C6D68F',

            })}
          />
          <CircularProgressbar
            value={85}
            text={`TS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#9BBFE0',
              textColor: '#9BBFE0',

            })}
          />
          <CircularProgressbar
            value={65}
            text={`C#`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#64C2A6',
              textColor: '#64C2A6',

            })}
          />
          <CircularProgressbar
            value={68}
            text={`mySQL`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: '#09455c',
              pathColor: '#2D87BB',
              textColor: '#2D87BB',

            })}
          />

        </div>
      </section>
      <section className={styles.mainProfilePagecontainerlanguagesDetails}>
        <section className={styles.mainProfilePageLanguages}>
          <h2>languages</h2>
          <div className={styles.mainProfilePageLanguagesBar}>
            <div>
              <div><p>Duch</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarDuch}></div></div></div>
              <div><p>English</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarEnglish}></div></div></div>
              <div><p>Berbers</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarBerbers}></div></div></div>
              <div><p>French</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarFrench}></div></div></div>
            </div>
          </div>
        </section>
        <section className={styles.mainProfilePageDetails}>
          <h2>details</h2>
          <div className={styles.mainProfilePageDetailsBar}>
            <table >
              <tr>
                <th>Name:</th>
                <td>Jafar Sabaouni</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>20</td>
              </tr>
              <tr>
                <th>City:</th>
                <td>Antwerpen</td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>belgium</td>
              </tr>
              <tr>
                <th>Telephone:</th>
                <td>xxxx xxx xxxx</td>
              </tr>

            </table>
          </div>
        </section>
      </section>

    </main>
  );
}

export default Home;
