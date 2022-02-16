import React from 'react';
import { Text, View, Button } from 'react-native';
import { Br } from './DetailsScreen';

// LEFT OFF AT: https://reactnavigation.org/docs/headers
export const LogoHeaderScreen = ({ navigation, route }) => {
  return (
    <View syle={{ flex: 1, padding: 100, height: '400' }}>
      <Text>LogoScreen</Text>
      <Text>LogoScreen</Text>
      <Br />
      <Button title='Go back' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
