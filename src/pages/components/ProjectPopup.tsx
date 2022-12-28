import React, { useState } from "react";
import styles from "../Projects.module.css";
import ShoppingList from "./Shoppinglist";
import ChatBox from "./ChatBox";
import Calculator from "./Calculator";
import PokemonList from "./PokemonList";
import Interval from "./Interval";
import ColorBox from "./ColorBox";
import SlotMachine from "./SlotMachine";
import TooDoo from "./TooDoo";

interface PopupProps {
  name: string;
  description: string;
  projectName: string;
}

const ProjectPopup = ({ name, description, projectName }: PopupProps) => {
  const [popup, setPopup] = useState<boolean>(false);

  let ProjectComponent ;
  switch(projectName){
    case "ShoppingList":
      ProjectComponent = ShoppingList;
      break;
    case "ChatBox":
      ProjectComponent = ChatBox;
      break;
    case "Calculator":
      ProjectComponent = Calculator;
      break;
    case "PokemonList":
      ProjectComponent = PokemonList;
      break;
    case "Interval":
      ProjectComponent = Interval;
      break;
    case "ColorBox":
      ProjectComponent = ColorBox;
      break;
    case "SlotMachine":
      ProjectComponent = SlotMachine;
      break;
    case "TooDoo":
      ProjectComponent = TooDoo;
      break;
    default:
      ProjectComponent = () => <div></div>;
  }
  return (
    <>
       <span className={styles.popupSpan}>
      {popup && (
        <div className={styles.popupContainer}>
          <div>
            <button onClick={() => { setPopup(!popup); }}>x</button>
            <h1>{name}</h1>
            <div className={styles.popupProjectContainer}>
              <div>
                <ProjectComponent/>
              </div>
            </div>
          </div>
        </div>
      )}</span>
      <div onClick={() => { setPopup(!popup); }}>
        <h2>{name}</h2> <p>{description}</p>
      </div>
    </>
  );
};
export default ProjectPopup;