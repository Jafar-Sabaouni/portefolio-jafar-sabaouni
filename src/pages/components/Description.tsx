import React ,{useEffect,useState} from 'react';
import styles from "../Home.module.css";
import profilePicture from '../assets/JafarSabaouni.png';
interface DescriptionProps {
  colorTheme:string
}
const Description = ({colorTheme}:DescriptionProps) => {

  return (
    <>
    <section className={styles.mainProfilePageDescription} style={{backgroundColor: colorTheme }}>
        <div className={styles.mainProfilePageDescriptionText}>
          <h1>Hi I am Jafar</h1>

          <h3>curently a student at AP Hogeschool</h3>
          <p>I have been studying programming at AP Hogeschool since 2021, but my journey with this field began in 2019 when I started learning it as a hobby. I began by aimlessly trying a little bit of everything . Over time, my passion for programming grew, and I continued to learn and expand my knowledge in this field. Today, I am a student at AP Hogeschool, where I am working towards a degree in programming. I am constantly striving to improve my skills and explore new possibilities in this field.</p>
          <p>At first, I thought I wanted to become a game developer, but as I dived deeper into the world of programming, I realized that there are so many other possibilities out there. I am excited to see where my passion for programming will take me, and I am eager to continue learning and growing as a developer.</p>
        </div>
        <div className={styles.mainProfileImageContainer}><img src={profilePicture} alt="" width='50%' /></div>
      </section>
    </>
  )
}
export default Description;
