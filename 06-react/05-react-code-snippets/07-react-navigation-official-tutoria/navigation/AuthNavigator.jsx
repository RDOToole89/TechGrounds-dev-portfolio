import { LoginScreen } from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { RotateInUpLeft } from 'react-native-reanimated';
import { ProfileScreen } from '../screens/ProfileScreen';

const AuthStack = createStackNavigator();

export const LoginStack = () => {
  // ** notes below

  // for more advanced status bar configuration check out:
  // https://reactnavigation.org/docs/status-bar/

  return (
    <AuthStack.Navigator initialRouteName='Login'>
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        // These options can also be moved to the top navigator if you want
        // the entire stack to have the same look such as brand colors for example.
        options={{
          title: 'My Login',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* We know that login is passing data in the route to Profile thus
       we can extract the route.params and personalize the header as such*/}
      <AuthStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </AuthStack.Navigator>
  );
};

// Adjusting header styles​

// There are three key properties to use when customizing the style of your header: headerStyle,headerTintColor, and headerTitleStyle.

// headerStyle: a style object that will be applied to the View that wraps the header. If you set backgroundColor on it, that will be the color of your header.

// headerTintColor: the back button and title both use this property as their color. In the example below, we set the tint color to white (#fff) so the back button and the header title would be white.

//headerTitleStyle: if we want to customize the fontFamily, fontWeight and other Text style properties for the title, we can use this to do it.

// There are a couple of things to notice here:

// On iOS, the status bar text and icons are black, and this doesn't look great over a dark-colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors as described in the status bar guide.

// The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share options between screens now.
