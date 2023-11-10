import { useState } from "react";

export function Counter(props) {
  const [counter, setCounter] = useState(0);
  
  const handleClick = (e) => {
    setCounter(counter + 1);
  }

  return (
    <button onClick={handleClick}>
      {counter}
    </button>
  )
}