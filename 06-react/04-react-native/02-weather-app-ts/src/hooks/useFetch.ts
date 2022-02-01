import { WeatherData } from './../types/app.d';
import { useState, useEffect } from 'react';

const useFetch = <T>(url: string | null) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError(true);
          setErrorMessage(
            `ERROR: ${response.status} city: ${response.statusText}`
          );
        }

        if (response.ok) {
          const data = await response.json();

          setData(data);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchData();

    const cleanUp = () => {
      setError(false);
      setLoading(false);
      setErrorMessage('');
    };

    return cleanUp;
  }, [url]);

  return { loading, error, data, errorMessage };
};

export default useFetch;
