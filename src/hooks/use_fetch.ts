import { useEffect, useState } from 'react';

export const useFetch = (url: string, ref: any, initialValue: any) => {
    const [data, setData] = useState<any>(initialValue);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (ref.current) {
          (async () => {
            try {
              const res = await fetch(url);
              const resJson = await res.json();
              setData(resJson);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
          })();
        }
        return () => {
          ref.current = false;
        };
      }, [url, ref]);
      return { loading, data, error };
  };
