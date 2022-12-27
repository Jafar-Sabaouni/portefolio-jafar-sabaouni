import React from 'react';

import { useEffect, useState } from "react";

interface TimerProps {
  interval: number
}

const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);

  return <p>{number}</p>
}

const Time = () => {
  const [timeHMS, setTimeHMS] = useState("");

  useEffect(() => {
    let handle = setInterval(() => {
      let current = new Date();
      let time = current.toLocaleTimeString("nl-BE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeHMS(time);
    }, 1000);

    return () => {
      clearInterval(handle);
    }
  }, [timeHMS]);
  return <p>{timeHMS}</p>

}
const RandomMin0Max100 =()=> {
  const [number, setNumber] = useState(0);
  
  const interval:number = 1000;
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber (Math.floor(Math.random() *100));
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);

  return <p>Random value between 1 and 100:{number}</p>
}
const RandomMin100Max200 =()=> {
  const [number, setNumber] = useState(0);
  
  const interval:number = 1000;
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber (Math.floor(Math.random() *100)+100);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);

  return <p>Random value between 100 and 200:{number}</p>
}

function Interval() {
  return (
    <div className="App">
      <Timer interval={1000} />
      <Time />
      <RandomMin0Max100 />
      <RandomMin100Max200/>
      
    </div>
  );
}

export default Interval;
