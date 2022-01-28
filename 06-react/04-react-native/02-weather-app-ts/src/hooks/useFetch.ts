import { useState, useEffect } from 'react';

const useFetch = <T>(url: string | null) => {
  const [data, setData] = useState<T | any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) setData(data);
        setError(null);
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    const cleanUp = () => {
      isMounted = false;
    };

    return cleanUp;
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
