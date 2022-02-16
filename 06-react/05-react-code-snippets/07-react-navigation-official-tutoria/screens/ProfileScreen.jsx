import React from 'react';
import { Text, View, Button } from 'react-native';
import { Br } from './DetailsScreen';

export const ProfileScreen = ({ navigation, route, ...rest }) => {
  console.log(`What's in the navigation? ${JSON.stringify(navigation)}`);
  console.log(`What's in the route? ${JSON.stringify(route)}`);
  console.log(`What's in the ...rest? ${JSON.stringify(rest)}`);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
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
      {/* We can also update the title by setting the options with 
      navigation.setOptions({ title: 'Updated!'}) */}
      <Button
        title='Update the title'
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
};
