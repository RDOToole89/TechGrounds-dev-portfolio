import { createStackNavigator } from '@react-navigation/stack';
import { MessagesScreen } from '../screens/MessagesScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export const Stack = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Messages' component={MessagesScreen} />
    </Stack.Navigator>
  );
};
