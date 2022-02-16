import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

export const CreatePostScreen = ({ navigation, route }) => {
  // https://reactnavigation.org/docs/params
  const [postText, setPostText] = useState('');

  return (
    <View syle={{ flex: 1, padding: 100 }}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        style={{ width: '50%' }}
        title='Post'
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
};
