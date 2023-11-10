import axios from "axios";
import { useEffect, useState } from "react";

type JokeResponse = {
  value: string
}

export function useJoke() {
  const [joke, setJoke] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldFetchNew, setShouldFetchNew] = useState(false);

  useEffect(() => {
    setShouldFetchNew(true);
  }, []);

  useEffect(() => {
    if (!shouldFetchNew) { return; }

    const controller = new AbortController();
    setIsLoading(true);
    axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random', {
      signal: controller.signal
    })
      .then(response => setJoke(response.data.value))
      .finally(() => setIsLoading(false))
      .finally(() => setShouldFetchNew(false));

    return () => controller.abort();
  }, [shouldFetchNew]);

  function fetchJoke() {
    setShouldFetchNew(true);
  }

  return {
    joke,
    isLoading,
    fetchJoke
  };
}