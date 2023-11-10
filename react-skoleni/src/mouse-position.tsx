import { useEffect, useState } from "react";

type Coordinates = {
  x: number;
  y: number;
}

export function MousePosition() {
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0});
  const [lastClickPosition, setLastClickPosition] = useState<Coordinates>({ x: 0, y: 0});

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setLastClickPosition({
        x: e.clientX,
        y: e.clientY
      })
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const {x ,y} = position;
  const isOnTheLeft = position.x < lastClickPosition.x;

  return <div style={{ color: isOnTheLeft ? 'green' : 'red'}}>
    <div>My mouse x position is {x} and y position is {y}</div>
    <div>Last click x position is {lastClickPosition.x} and y position is {lastClickPosition.y}</div>
  </div>
}