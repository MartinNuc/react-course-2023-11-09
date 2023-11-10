import { useContext } from "react";
import { useJoke } from "./use-joke"
import { ThemeContext } from "./theme-context";

export function Joke() {

  const { current } = useContext(ThemeContext);
  const { joke, isLoading, fetchJoke } = useJoke();

  return <div style={{ color: current === 'dark' ? 'grey' : 'white' }}>
    {isLoading && <h1>⏰</h1>}
    {joke}
    <button onClick={fetchJoke}>Fetch joke</button>
    <hr />
  </div>
}