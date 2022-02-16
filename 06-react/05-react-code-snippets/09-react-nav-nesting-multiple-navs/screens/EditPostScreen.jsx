import { View, Text, Button } from 'react-native';

export const EditPost = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edit Post Screen</Text>
      <Button title='Go back' onPress={() => console.log('pess')} />
    </View>
  );
};
