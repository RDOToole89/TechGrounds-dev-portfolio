import { useState, useEffect } from 'react';

const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(url, options)
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
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;
