import React from 'react';
import { useState } from "react";
import { CSSProperties } from 'react';

/* color box*/
const ColorBox = () => {
  const [count, setCount] = useState<number>(0);
  const handleChangeChangeColor: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (count === 4) {
      setCount(0)
    } else {
      setCount(count + 1)
    }

  }
  const Colorbox1: CSSProperties = {
    backgroundColor: '#61dafb',
    width: '50px',
    height: '50px',

  }
  const Colorbox2: CSSProperties = {
    backgroundColor: 'green',
    width: '50px',
    height: '50px',

  }
  const Colorbox3: CSSProperties = {
    backgroundColor: 'purple',
    width: '50px',
    height: '50px',

  }
  const Colorbox4: CSSProperties = {
    backgroundColor: 'crimson',
    width: '50px',
    height: '50px',

  }
  const Colorbox5: CSSProperties = {
    backgroundColor: 'yellow',
    width: '50px',
    height: '50px',

  }

  let color: CSSProperties = Colorbox1

  if (count === 0) { color = Colorbox1 } else
    if (count === 1) { color = Colorbox2 } else
      if (count === 3) { color = Colorbox3 } else
        if (count === 4) { color = Colorbox4 } else
          if (count === 5) { color = Colorbox5 };
  return (<>

    <div style={color}></div>
    <button onClick={handleChangeChangeColor}>next color</button>
  </>
  )

}
export default ColorBox;