import { useEffect, useState } from 'react';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export const useAPI = <T,>(
  url: AxiosRequestConfig['url'],
  method: AxiosRequestConfig['method']
) => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<null | string>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      setFetchError(null);
      setIsLoading(true);

      try {
        if (!url || !method) throw new Error('Invalid url or method');

        const res = await axios.get<T>(url, { signal });

        setData(res.data);
      } catch (error: unknown) {
        if (axios.isCancel(error)) {
          console.log('Dev mode');
        } else if (error instanceof Error) {
          setFetchError(`Server error occurred: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [method, url]);

  return { data, isLoading, fetchError };
};

export default useAPI;
