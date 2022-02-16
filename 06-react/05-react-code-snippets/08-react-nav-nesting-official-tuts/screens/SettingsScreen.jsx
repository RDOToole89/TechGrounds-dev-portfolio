import { View, Text, Button } from 'react-native';

export const BR = () => <View style={{ marginVertical: 50 }}></View>;

export const SettingsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title='Go to ROOT drawer => Profile screen'
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
      <BR />
      <Button
        title='Go to ROOT drawer => Profile screen with Params'
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Profile',
            params: { user: 'Roibin' },
          })
        }
      />
      <BR />
      <Button
        title='Go to messages screen from settings'
        onPress={() => navigation.navigate('Messages')}
      />
    </View>
  );
};
