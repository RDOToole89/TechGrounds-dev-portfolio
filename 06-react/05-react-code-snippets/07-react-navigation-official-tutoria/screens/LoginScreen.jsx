import React from 'react';
import { Text, View, Button } from 'react-native';
import { Br } from './DetailsScreen';

export const LoginScreen = ({ navigation, route, ...rest }) => {
  console.log(`What's in the navigation? ${JSON.stringify(navigation)}`);
  console.log(`What's in the route? ${JSON.stringify(route)}`);
  console.log(`What's in the ...rest? ${JSON.stringify(rest)}`);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Br />
      <Button
        title='Go to Home screen'
        onPress={() =>
          navigation.navigate('Home', {
            id: 65,
            name: 'Roibin',
            msg: 'I am passing Params',
          })
        }
      />
      <Br />
      {/* here we pass the userdata to the Profile screen  */}
      <Button
        title='Go to Profile Page'
        onPress={() =>
          navigation.navigate('Profile', {
            id: 65,
            name: 'Roibin',
            msg: 'Hello from Login Screen',
          })
        }
      />
    </View>
  );
};
