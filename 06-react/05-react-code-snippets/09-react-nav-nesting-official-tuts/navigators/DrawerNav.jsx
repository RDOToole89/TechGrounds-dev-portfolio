import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen';
import { HomeTabNav } from './HomeTabNav';
import { SettingsStack } from './SettingsStack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      {/* This is a nested tabnav */}
      <Drawer.Screen name='Home' component={HomeTabNav} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='SettingsStack' component={SettingsStack} />
    </Drawer.Navigator>
  );
};
