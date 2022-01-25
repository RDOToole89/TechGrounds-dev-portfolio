import { useState, useEffect } from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    let isMounted = true;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
