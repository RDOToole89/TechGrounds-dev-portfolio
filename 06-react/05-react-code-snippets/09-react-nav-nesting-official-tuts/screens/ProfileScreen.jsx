import { View, Text, Button } from 'react-native';

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title='Go back' onPress={() => console.log('pess')} />
    </View>
  );
};
