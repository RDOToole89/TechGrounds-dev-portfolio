import { View, Text, Button } from 'react-native';

export const SignInScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SignIn Screen</Text>
      <Button title='Go back' onPress={() => console.log('pess')} />
    </View>
  );
};
