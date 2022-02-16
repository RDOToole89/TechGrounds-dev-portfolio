import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTabNav } from './navigators/HomeTabNav';
import { EditPost } from './screens/EditPostScreen';
import { HelpScreen } from './screens/HelpScreen';
import { InviteScreen } from './screens/InviteScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SignIn, SignInScreen } from './screens/SiginInScreen';
import { SignUpScreen } from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='EditPost' component={EditPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Nesting multiple navigators​

// It's sometimes useful to nest multiple navigators such as stack, drawer or tabs.

//When nesting multiple stack, drawer or bottom tab navigator, headers from both child and parent navigators would be shown. However, usually it's more desirable to show the header in the child navigator and hide the header in the screen of the parent navigator.

//To achieve this, you can hide the header in the screen containing the navigator using the
// headerShown: false option.

// Best practices when nesting​

// We recommend to reduce nesting navigators to minimal. Try to achieve the behavior you want with as little nesting as possible. Nesting has many downsides:

// 1. ) It results in deeply nested view hierarchy which can cause memory and performance issues in lower end devices

// 2. )Nesting same type of navigators (e.g. tabs inside tabs, drawer inside drawer etc.) might lead to a confusing UX

// 3. )With excessive nesting, code becomes difficult to follow when navigating to nested screens, configuring deep link etc.

//Think of nesting navigators as a way to achieve the UI you want rather than a way to organize your code. If you want to create separate group of screens for organization, instead of using separate navigators, you can use the Group component.

// export default function App() {
//   let isLoggedIn = false;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isLoggedIn ? (
//           // Screens for logged in users
//           <Stack.Group>
//             <Stack.Screen name='Home' component={HomeTabNav} />
//             <Stack.Screen name='Profile' component={ProfileScreen} />
//           </Stack.Group>
//         ) : (
//           // Auth screens
//           <Stack.Group screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='SignIn' component={SignInScreen} />
//             <Stack.Screen name='SignUp' component={SignUpScreen} />
//           </Stack.Group>
//         )}
//         {/* Common modal screens */}
//         <Stack.Group screenOptions={{ presentation: 'modal' }}>
//           <Stack.Screen name='Help' component={HelpScreen} />
//           <Stack.Screen name='Invite' component={InviteScreen} />
//         </Stack.Group>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
