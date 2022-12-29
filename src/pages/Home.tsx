import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Experiences from './components/Experiences';
import LanguagesAndDetails from './components/LanguagesAndDetails';
import Description from './components/Description';
interface HomeProps {
  colorTheme:string
}
const Home = ({colorTheme}:HomeProps) => {


  return (
    <main>
      <Description colorTheme={colorTheme} />
      <Experiences colorTheme={colorTheme}/>
      <LanguagesAndDetails colorTheme={colorTheme}/>

    </main>
  );
}

export default Home;
