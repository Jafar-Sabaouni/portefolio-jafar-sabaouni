import React from 'react';
import { useState } from "react";
import { CSSProperties } from 'react';


const Calculator = () => {
    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [opties, setOpties] = useState<string>("+");
    const [result, setResult] = useState<string>("");
    const textcolorNormal: CSSProperties = {
      color: 'black'
    }
    const textcolorAlert: CSSProperties = {
      color: 'crimson'
    }
    let textcolor: CSSProperties = textcolorNormal;
    if (result === "canot devide by 0") {
      textcolor = textcolorAlert
    }
    const calculate = () => {
      if (opties === "+") { setResult(String((number1 + number2))); console.log((number1 + number2)) } else
        if (opties === "-") { setResult(String((number1 - number2))); } else
          if (opties === "*") { setResult(String((number1 * number2))); } else
            if (opties === "/") { if (number2 !== 0 && number1 !== 0) { setResult(String((number1 / number2))) } else { setResult("canot devide by 0") }; };
    }
  
    return (
      <div>
        <input type="text" onChange={(event) => { setNumber1(Number(event.target.value)); }} />
        <input type="text" onChange={(event) => { setNumber2(Number(event.target.value)); }} />
  
        <select id="opties" name="opties" onChange={(event) => { setOpties(event.target.value); }} value={opties}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
  
        <button onClick={() => calculate()}>Result</button>
        <p style={textcolor}>{result}</p>
      </div>
    )
  }
  
export default Calculator;