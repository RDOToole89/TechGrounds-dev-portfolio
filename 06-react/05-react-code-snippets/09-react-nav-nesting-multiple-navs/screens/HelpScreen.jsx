import { View, Text, Button } from 'react-native';

export const HelpScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help Screen</Text>
      <Button title='Go back' onPress={() => console.log('pess')} />
    </View>
  );
};
