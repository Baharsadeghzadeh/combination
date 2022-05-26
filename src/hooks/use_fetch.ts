import { useEffect, useState } from 'react';
import { Tdata } from '../shared/types/data-table';

export const useFetch = (url: string, ref: any, initialValue: Tdata) => {
    const [data, setData] = useState<Tdata>(initialValue);
    const [error, setError] = useState<any>();
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
