import { View, Text, Button } from 'react-native';

export const MessagesScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages Screen</Text>
      <Button title='Go back' onPress={() => console.log('pess')} />
    </View>
  );
};
