import { Text, View } from 'react-native';
import { MemoizedMovie, MemoziedMovie2, Movie } from '../components/Movie';

export const MovieViewsRealtime = ({ views, movieData }) => {
  const { title, releaseDate } = movieData;
  console.log(views);

  return (
    <View>
      <Movie title={title} releaseDate={releaseDate} memo={false} />
      <MemoizedMovie title={title} releaseDate={releaseDate} memo={true} />
      <Text> Movie views: {views}</Text>
    </View>
  );
};
