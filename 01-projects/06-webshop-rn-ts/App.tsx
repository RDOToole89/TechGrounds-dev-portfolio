import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/state/store';

import useCachedResources from './src/hooks/useCachedResources';
import { Home } from './src/screens/Home';

export type RootStackParams = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  const isLoaded = useCachedResources();
  console.log(isLoaded);

  return (
    isLoaded && (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='Home' component={Home} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  );
}
