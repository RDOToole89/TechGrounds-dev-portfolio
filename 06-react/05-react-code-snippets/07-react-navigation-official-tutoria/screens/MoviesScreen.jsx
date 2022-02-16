import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { MemoizedMovie, MemoziedMovie2, Movie } from '../components/Movie';
import memoInfoGraphic from '../assets/when-to-use-memo-infographic.png';

export const MoviesScreen = () => {
  // Check this article: https://dmitripavlutin.com/use-react-memo-wisely/

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // This interval changes toggles the state of MoviesScreen which will
    // trigger a re-render. However if you check the console logs you will
    // see that memoized movie is only re-rendered once. We gain performance
    // by re-using memoized content.
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Movies Screen</Text>
      <Image
        style={{ height: 400, width: 300, resizeMode: 'contain' }}
        source={memoInfoGraphic}
      />
      <Movie
        title='Heat'
        releaseDate='December 15, 1995'
        memo={false}
        noneMemoizedProp='Non memoizedProp'
      />
      <MemoizedMovie
        title='Heat'
        releaseDate='December 15, 1995'
        memo={true}
        memoizedMovieOneProp='MemoizedMovie1 prop'
      />
      <MemoziedMovie2
        title='Heat'
        releaseDate='December 15, 1995'
        memo={true}
        memoizedMovieTwoProp='MemoizedMovie2 prop'
      />
    </View>
  );
};
