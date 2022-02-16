import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerNav } from './navigators/DrawerNav';

import { HomeTabNav } from './navigators/HomeTabNav';
import {
  SettingsPile,
  SettingsStack,
  SettingStack,
} from './navigators/SettingsStack';
import { FeedScreen } from './screens/FeedScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';

// EXAMPLE WITH DRAWER NAVIGATION BELOW => UNCOMMENT TO CHECK

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Root'
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Settings' component={SettingsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// EXAMPLE WITH TAB NAVIGATOR BELOW => UNCOMMENT TO CHECK

// https://reactnavigation.org/docs/nesting-navigators
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name='Home'
//           component={HomeTabNav}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name='Profile' component={ProfileScreen} />
//         <Stack.Screen name='Settings' component={SettingsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//In the above example, the Home component contains a tab navigator. The Home component is also used for the Home screen in your stack navigator inside the App component. So here, a tab navigator is nested inside a stack navigator:

// * Stack.Navigator
//  * Home (Tab.Navigator)
//    * Feed (Screen)
//  * Messages (Screen)
// * Profile (Screen)
// () Settings (Screen)

//Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators.

// When nesting navigators, there are some things to keep in mind:

// 1. Each navigator has its own options
// https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state

// 2. Each screen in a navigator has its own params
// For example: any params passed to a screen in a nested navigator are in the route prop of that screen and aren't accessible from a screen in a parent or child navigator.
// If you need to access params of the parent screen from a child screen, you can use React Context to expose params to children.

// 3. Navigator specific methods are available in the navigators nested inside

//For example, if you have a stack inside a drawer navigator, the drawer's openDrawer, closeDrawer, toggleDrawer methods etc. will also be available on the navigation prop in the screen's inside the stack navigator. But say you have a stack navigator as the parent of the drawer, then the screens inside the stack navigator won't have access to these methods, because they aren't nested inside the drawer.

// Similarly, if you have a tab navigator inside stack navigator, the screens in the tab navigator will get the push and replace methods for stack in their navigation prop.

// If you need to dispatch actions to the nested child navigators from a parent, you can use navigation.dispatch: navigation.dispatch(DrawerActions.toggleDrawer());
// https://reactnavigation.org/docs/navigation-prop/#dispatch

// 4. Nested navigators don't receive parent's events
// For example, if you have a stack navigator nested inside a tab navigator, the screens in the stack navigator won't receive the events emitted by the parent tab navigator such as (tabPress) when using navigation.addListener.

//To receive events from parent navigator, you can explicitly listen to parent's events with:
// navigation.getParent():

// const unsubscribe = navigation.getParent().addListener('tabPress', (e) => {
// Do something
// });

// 5. Parent navigator's UI is rendered on top of child navigator
// For example, when you nest a stack navigator inside a drawer navigator, you'll see that the drawer appears above the stack navigator's header. However, if you nest the drawer navigator inside a stack, the drawer will appear below the header of the stack. This is an important point to consider when deciding how to nest your navigators.
