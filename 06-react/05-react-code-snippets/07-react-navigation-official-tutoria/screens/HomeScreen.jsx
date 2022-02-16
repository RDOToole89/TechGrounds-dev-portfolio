import { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Br } from './DetailsScreen';

export const HomeScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Br />
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
      <Br />

      <Button
        title='Go to Params screen'
        onPress={() =>
          navigation.navigate('ParamScreen', {
            id: 65,
            name: 'Roibin',
            msg: 'I am passing Params',
          })
        }
      />
      <Br />
      <Button
        title='Create post'
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Br />
      {/* In this example we pass params to the nested Auth Navigator and select the to pass
      the params to the 'Login' screen 
      ONLY PASS NECESSARY PARAMS pass a user ID not an entire user object
      https://reactnavigation.org/docs/params
      */}
      <Button
        title='Go to login'
        onPress={() =>
          navigation.navigate('Auth', {
            screen: 'Login',
            params: { user: 'Roibin' },
          })
        }
      />
      <Br />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
};

// Some examples of what should be in params are:

// IDs like user id, item id etc., e.g. navigation.navigate('Profile', { userId: 'Jane' })
// Params for sorting, filtering data etc. when you have a list of items, e.g. navigation.navigate('Feeds', { sortBy: 'latest' })
// Timestamps, page numbers or cursors for pagination, e.g. navigation.navigate('Chat', { beforeTime: 1603897152675 })
// Data to fill inputs on a screen to compose something, e.g. navigation.navigate('ComposeTweet', { title: 'Hello world!' })

// In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of // an object instead of passing a full object. Keep your application data separate from the navigation state.
