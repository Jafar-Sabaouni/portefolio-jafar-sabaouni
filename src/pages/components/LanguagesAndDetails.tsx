import React from 'react';
import styles from "../Home.module.css";

interface LanguagesAndDetailsProps {
  colorTheme:string
}

const LanguagesAndDetails = ({colorTheme}:LanguagesAndDetailsProps) => {

  return (
    <>
          <section className={styles.mainProfilePagecontainerlanguagesDetails}>
        <section className={styles.mainProfilePageLanguages}>
          <h2 style={{color: colorTheme }}>languages</h2>
          <div className={styles.mainProfilePageLanguagesBar} style={{backgroundColor: colorTheme }} >
            <div>
              <div><p>Duch</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarDuch}></div></div></div>
              <div><p>English</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarEnglish}></div></div></div>
              <div><p>Berbers</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarBerbers}></div></div></div>
              <div><p>French</p><div className={styles.mainProfilePageLanguagesPercentageBar}> <div className={styles.mainProfilePageLanguagesPercentageBarFrench}></div></div></div>
            </div>
          </div>
        </section>
        <section className={styles.mainProfilePageDetails}>
          <h2 style={{color: colorTheme }}>details</h2>
          <div className={styles.mainProfilePageDetailsBar} style={{backgroundColor: colorTheme }}>
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
      </section></>
  )
}
export default LanguagesAndDetails;
