import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styled/StyledComponents';

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [images, setImages] = useState(null);
  const API_URL = `https://picsum.photos/v2/list`;

  useEffect(() => {
    setTimeout(() => {
      !name && setName('Roibin');
    }, 2000);

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        const imagesArray = await response.json();
        setImages(imagesArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <div>Welcome {name}</div>
      {!images ? (
        <h1>Loading...</h1>
      ) : (
        <img
          style={{
            width: '600px',
            height: '300px',
            backgroundColor: 'orangered',
            objectFit: 'cover',
            margin: '2rem',
          }}
          src={images[0].download_url}
          alt='random'
        />
      )}

      <div style={{ width: '100px', height: '50px', margin: '2rem' }}>COUNT: {count}</div>
      <button style={{ marginBottom: '2rem' }} onClick={() => setCount(count + 1)}>
        INCREASE
      </button>
      <input onChange={(e) => setName(e.target.value)} />
    </Wrapper>
  );
}

export default UseEffectExample;
