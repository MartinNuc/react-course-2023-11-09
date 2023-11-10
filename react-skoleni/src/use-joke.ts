import axios from "axios";
import { useEffect, useState } from "react";

type JokeResponse = {
  value: string
}

export function useJoke() {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = fetchJoke();

    return () => controller.abort();
  }, []);

  function fetchJoke() {
    const controller = new AbortController();
    setIsLoading(true);
    axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random', {
      signal: controller.signal
    })
      .then(response => setJoke(response.data.value))
      .finally(() => setIsLoading(false));

    return controller;
  }

  return {
    joke,
    isLoading,
    fetchJoke
  };
}