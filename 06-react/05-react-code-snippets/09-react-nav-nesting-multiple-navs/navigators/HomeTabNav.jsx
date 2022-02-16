import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HelpScreen } from '../screens/HelpScreen';

import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const HomeTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Help' component={HelpScreen} />
    </Tab.Navigator>
  );
};
