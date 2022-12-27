import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Experiences from './components/Experiences';
import LanguagesAndDetails from './components/LanguagesAndDetails';
import Description from './components/Description';
const Home = () => {


  return (
    <main>
      <Description/>
      <Experiences/>
      <LanguagesAndDetails/>

    </main>
  );
}

export default Home;
