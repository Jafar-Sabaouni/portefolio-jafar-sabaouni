import React from 'react';
import styles from "../Home.module.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface DescriptionProps {
  colorTheme:string
}

const Experiences = ({colorTheme}:DescriptionProps) => {

  return (
    <>
    <section className={styles.mainProfilePageExperiences} >
        <h2 style={{color: colorTheme }}>Skils</h2>
        <div className={styles.mainProfilePageExperiencesBar} style={{backgroundColor: colorTheme }}>
          <CircularProgressbar
            value={90}
            text={`HTML`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#9BBFE0',
              textColor: '#9BBFE0',

            })}
          />
          <CircularProgressbar
            value={80}
            text={`CSS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#64C2A6',
              textColor: '#64C2A6',

            })}
          />
          <CircularProgressbar
            value={80}
            text={`Node.js`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#C6D68F',
              textColor: '#C6D68F',

            })}
          />
          <CircularProgressbar
            value={85}
            text={`React.js`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
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
              trailColor:colorTheme,
              pathColor: '#F66D44',
              textColor: '#F66D44',

            })}
          />

          <CircularProgressbar
            value={80}
            text={`JS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#C6D68F',
              textColor: '#C6D68F',

            })}
          />
          <CircularProgressbar
            value={85}
            text={`TS`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#9BBFE0',
              textColor: '#9BBFE0',

            })}
          />
          <CircularProgressbar
            value={65}
            text={`C#`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#64C2A6',
              textColor: '#64C2A6',

            })}
          />
          <CircularProgressbar
            value={68}
            text={`mySQL`}
            className={styles.mainProfilePageExperiencesBarCircle}
            styles={buildStyles({
              trailColor: colorTheme,
              pathColor: '#2D87BB',
              textColor: '#2D87BB',

            })}
          />

        </div>
      </section>
    </>
  )
}
export default Experiences;
