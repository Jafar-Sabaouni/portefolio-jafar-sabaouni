import React, { useState, useEffect } from 'react';
import styles from "../Projects.module.css";
import image1 from '../assets/SlotImages/a.png';
import image2 from '../assets/SlotImages/b.png';
import image3 from '../assets/SlotImages/c.png';
import image4 from '../assets/SlotImages/d.png';
import image5 from '../assets/SlotImages/e.png';


const getRandomSlots = () => {
  var slotarrey: number[] = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
  return slotarrey;
}
const checkWinnOrLose = (a: number[]) => {
  if (a.every(v => v === a[0]) === true) {
    return true
  } else {
    return false
  }
}
const findImage = (randomslot: number) => {
  let slot: string = ' ';
  if (randomslot === 0) {
    return image1
  } else if (randomslot === 1) {
    return image2
  } else if (randomslot === 2) {
    return image3
  } else if (randomslot === 3) {
    return image4
  } else if (randomslot === 4) {
    return image5
  }
  return slot;

}
function SlotMachine() {
  const [saldo, setSaldo] = useState<number>(100);
  const [slots, setSlots] = useState<number[]>([1,2,3]);
  useEffect(() => {
    if (checkWinnOrLose(slots)) {
      setSaldo(saldo + 20)
    }
  }, [slots])
  const handleChange: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (saldo !== 0) {
      setSaldo(saldo - 1);
      setSlots(getRandomSlots())
    }

  }


  return (
    <div className={styles.slotMachine}>
      {saldo !== 0 && <p>saldo: {saldo} </p>}
      {saldo === 0 && <p>je saldo is on Losser </p>}
      <div>
        <button onClick={handleChange}>Pull Lever</button>
        <img src={findImage(slots[0])} alt="" />
        <img src={findImage(slots[1])} alt="" />
        <img src={findImage(slots[2])} alt="" />
      </div>

    </div>
  );
}

export default SlotMachine;
