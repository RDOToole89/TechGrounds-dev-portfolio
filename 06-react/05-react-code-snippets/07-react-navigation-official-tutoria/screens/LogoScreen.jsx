import React from 'react';
import { Text, View, Button } from 'react-native';

// LEFT OFF AT: https://reactnavigation.org/docs/headers
export const LogoScreen = ({ navigation, route }) => {
  return (
    <View syle={{ flex: 1, padding: 100 }}>
      <Text>LogoScreen</Text>
      <Button title='Go to back' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
