import { useJoke } from "./use-joke"

export function Joke() {

  const { joke, isLoading, fetchJoke } = useJoke();

  return <div>
    {isLoading && <h1>⏰</h1>}
    {joke}
    <button onClick={fetchJoke}>Fetch joke</button>
    <hr />
  </div>
}