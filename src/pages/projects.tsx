import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import styles from "./Projects.module.css";
import ShoppingList from "./components/Shoppinglist"
import ChatBox from "./components/ChatBox"
import Calculator from "./components/Calculator"
import PokemonList from "./components/PokemonList";

interface PopupProps{

}
const Popup=({}:PopupProps)=>{
    const [popup1, setPopup1] = useState<boolean>(false);
    return(<div className={styles.popupContainer} >
        <div><button onClick={() => { setPopup1(false) }}>x</button><h1>ShoppingList</h1>
        <div className={styles.popupProjectContainer}>
            <div><ShoppingList/></div>
        </div></div></div>)

}
const  Projects=()=> {
    const [popup1, setPopup1] = useState<boolean>(false);
    const [popup2, setPopup2] = useState<boolean>(false);
    const [popup3, setPopup3] = useState<boolean>(false);
    const [popup4, setPopup4] = useState<boolean>(false);
    const [popup5, setPopup5] = useState<boolean>(false);
    const [popup6, setPopup6] = useState<boolean>(false);
    const [popup7, setPopup7] = useState<boolean>(false);
    const [popup8, setPopup8] = useState<boolean>(false);

    return (
        <main className={styles.MainContainer} >
            
            {popup1 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup1(false) }}>x</button><h1>ShoppingList</h1>
            <div className={styles.popupProjectContainer}>
                <div><ShoppingList/></div>
            </div></div></div>}
            {popup2 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup2(false) }}>x</button><h1>Calculator</h1>
                    <div className={styles.popupProjectContainer}>
                    <div><Calculator/></div>
            </div></div></div>}
            {popup3 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup3(false) }}>x</button><h1>ChatBox</h1>
                    <div className={styles.popupProjectContainer}>
                    <div><ChatBox/></div>
            </div></div></div>}
            {popup4 && <div className={styles.popupContainer} >
                <div><button onClick={() => { setPopup4(false) }}>x</button><h1>PokemonList</h1>
                    <div className={styles.popupProjectContainer}>
                        <div><PokemonList/></div>
            </div></div></div>}
            {popup5 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup5(false) }}>x</button><h1>project5</h1>
                    <div className={styles.popupProjectContainer}>

            </div></div></div>}
            {popup6 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup6(false) }}>x</button><h1>project6</h1>
                    <div className={styles.popupProjectContainer}>

            </div></div></div>}
            {popup7 && <div className={styles.popupContainer} >
            <div><button onClick={() => { setPopup7(false) }}>x</button><h1>project7</h1>
                    <div className={styles.popupProjectContainer}>

            </div></div></div>}
            {popup8 && <div className={styles.popupContainer} >
                <div><button onClick={() => { setPopup8(false) }}>x</button><h1>project8</h1>
                    <div className={styles.popupProjectContainer}>

            </div></div></div>}
            <div className={styles.IntroTextContainer}>
            <h1>my projects</h1>
            <p>Welcome to my projects page! On this page, you will see a selection of eight projects that I completed as part of the WebFrameworks class at AP Hogeschool.<br /> These projects showcase the skills i learnd in reactjs typescript  development. I hope you enjoy exploring these projects as much as I enjoyed creating them</p>
            </div>
            <section className={styles.ProjectsContainer}>
                <div onClick={() => { setPopup1(true) }}><h2>ShoppingList</h2> <p>The ShoppingList project is a tool that allows users to create a list of items they need to purchase.</p></div>
                <div onClick={() => { setPopup2(true) }}><h2>Calculator</h2><p>The Calculator project is a tool to calculate 2 nummbers using these mathematical symbols: +, -, *, /</p></div>
                <div onClick={() => { setPopup3(true) }}><h2>ChatBox</h2><p>The ChatBox project is a tool that allows the user to create messages and delete them </p></div>
                <div onClick={() => { setPopup4(true) }}><h2>PokemonList</h2><p>The PokeList project shows a list where the user can choose its length and can search the list</p></div>
                <div onClick={() => { setPopup5(true) }}><h2></h2></div>
                <div onClick={() => { setPopup6(true) }}><h2></h2></div>
                <div onClick={() => { setPopup7(true) }}><h2></h2></div>
                <div onClick={() => { setPopup8(true) }}><h2></h2></div>
            </section>
        </main>
    );
}

export default Projects;
