import React from 'react';
import { Button, Text, View } from 'react-native';

export function Movie({ title, releaseDate, memo, ...rest }) {
  // You will see that React renders <MemoizedMovie> just once,
  // while <Movie> re-renders every time.

  memo ? console.log(rest) : console.log(rest);

  console.log(`${memo ? '<MemoizedMovie>' : '<Movie>'} rendered`);

  return (
    <View>
      <Text>Movie title: {title}</Text>
      <Text>Release date: {releaseDate}</Text>
      <Button title='press me' onPress={() => console.log('click')} />
    </View>
  );
}

// Custom equality check of props
// By default React.memo() does a shallow comparison of props and objects of props.
// To customize the props comparison you can use the second argument to
// indicate an equality check function:
// React.memo(Component, [areEqual(prevProps, nextProps)]);

const moviePropsAreEqual = (prevMovie, nextMovie) => {
  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  );
};

// You gain a performance boost: by reusing the memoized content, React skips
// rendering the component and doesn't perform a virtual DOM difference check.
export const MemoizedMovie = React.memo(Movie);
export const MemoziedMovie2 = React.memo(Movie, moviePropsAreEqual);
