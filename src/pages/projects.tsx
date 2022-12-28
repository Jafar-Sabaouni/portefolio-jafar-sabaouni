import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styles from "./Projects.module.css";

import ProjectPopup from './components/ProjectPopup';

const Projects = () => {
    return (
        <main className={styles.MainContainer} >

            
            <div className={styles.IntroTextContainer}>
                <h1>my projects</h1>
                <p>Welcome to my projects page! On this page, you will see a selection of eight projects that I completed as part of the WebFrameworks class at AP Hogeschool. These projects showcase the skills I learned in ReactJS and TypeScript development. To interact with a project, you need to hover over the project box and click it. I hope you enjoy exploring these projects as much as I enjoyed creating them.</p>
            </div>
            <section className={styles.ProjectsContainer}>
                <ProjectPopup name={'SlotMachine'} description={'The Slot Machine project is a gambling tool where the user trys to earn more money.'} projectName={'SlotMachine'} />
                <ProjectPopup name={'Calculator'} description={'The Calculator project is a tool to calculate 2 nummbers using these mathematical symbols: +, -, *, /.'} projectName={'Calculator'} />
                <ProjectPopup name={'ChatBox'} description={'The ChatBox project is a tool that allows the user to create messages and delete them. '} projectName={'ChatBox'} />
                <ProjectPopup name={'PokemonList'} description={'The PokeList project shows a list where the user can choose its length and can search the list.'} projectName={'PokemonList'} />
                <ProjectPopup name={'Interval'} description={'The Interval project shows a timer a clock and a random value between two integers.'} projectName={'Interval'} />
                <ProjectPopup name={'ColorBox'} description={'The ColorBox project displays a color and a button. When the button is clicked, the color changes.'} projectName={'ColorBox'} />
                <ProjectPopup name={'ShoppingList'} description={'The ShoppingList project is a tool that allows users to create a list of items they need to purchase.'} projectName={'ShoppingList'} />
                <ProjectPopup name={'TooDoo'} description={'The TooDoo project is a tool that alows u to make a list to keeps track of things u need to do.'} projectName={'TooDoo'} />
            </section>
        </main>
    );
}

export default Projects;
