import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <button style={{
      textAlign: 'center'
    }} className={counter > 5 ? 'red' : 'green'} onClick={handleClick}>
      {counter}
    </button>
  )
}