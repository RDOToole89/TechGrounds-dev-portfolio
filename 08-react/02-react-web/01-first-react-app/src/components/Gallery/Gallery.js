import React from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { randomNumber } from '../../pages/Home';

export default function Gallery({ columns }) {
  const API_KEY = process.env.REACT_APP_KEY;
  const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

  const { loading, data } = useFetch(URL);

  const imagesResized = data?.map((image, i) => {
    console.log(image);

    const difference = 12 - data.length;
    if (difference) {
      for (let i = 0; i < difference; i++) {
        data.push({
          urls: {
            id: i,
            regular: `http://source.unsplash.com/800x600?sig=${randomNumber(1, 1000)}`,
          },
        });
      }
    }

    return (
      <img
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        key={i}
        src={image.urls?.regular}
        alt={`picture of ${image.id}`}
      />
    );
  });

  console.log(imagesResized);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <StyledGallery style={{ '--columns': columns }}>{imagesResized}</StyledGallery>
  );
}

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: auto;
  background-color: orangered;
`;
