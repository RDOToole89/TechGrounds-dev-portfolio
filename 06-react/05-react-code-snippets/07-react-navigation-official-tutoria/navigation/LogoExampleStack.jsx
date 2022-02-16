import { LoginScreen } from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen';
import { LogoScreen } from '../screens/LogoScreen';
import { Image } from 'react-native';

const LogoStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/icon.png')}
    />
  );
}

export const LogoTrialStack = () => {
  return (
    <LogoStack.Navigator initialRouteName='Logo'>
      <LogoStack.Screen
        name='Logo'
        component={LogoScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
    </LogoStack.Navigator>
  );
};
