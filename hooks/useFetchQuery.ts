import { useQuery } from '@tanstack/react-query';

const endpoint = 'https://pokeapi.co/api/v2';

interface API {
  '/pokemon': {
    count: number;
    next: string | null;
    results: Array<{ name: string; url: string }>;
  };
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration * 1000));
}

export function useFetchQuery<T extends keyof API>(path: T) {
  return useQuery<API[T]>({
    queryKey: [path],
    queryFn: async () => {
      await wait(1); // Simule une latence

      const response = await fetch(endpoint + path, {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = (await response.json()) as API[T];
      return data;
    },
  });
}
