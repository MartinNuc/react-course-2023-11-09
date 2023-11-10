import { useState } from "react";

type Props = {
  pregeneratedCount: number;
}

export function RandomNumbers({ pregeneratedCount }: Props) {
  const [numbers, setNumbers] = useState(
    () => [...Array(pregeneratedCount)].map(() => Math.random())
  );

  function addNewRandomNumber() {
    const novyPole = [...numbers, Math.random()];
    setNumbers(novyPole);
  }

  return (
    <>
      <ul>
        {numbers.map(n => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      
      <button onClick={addNewRandomNumber}>new number</button>
    </>
  )
}