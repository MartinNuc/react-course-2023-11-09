import { useEffect, useState } from "react";

export function AutomaticCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ref = setInterval(() => setCounter(currentCounter => currentCounter + 1), 1000);

    return () => clearInterval(ref);
  }, []);

  return <div>
    Auto-Counter: {counter}
  </div>
}
