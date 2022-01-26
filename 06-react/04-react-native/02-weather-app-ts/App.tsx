import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkModeProvider } from './src/context/DarkModeContext';
import { CityDetails } from './src/screens/CityDetails/CityDetails';
import { CityScreen } from './src/screens/CityScreen/CityScreen';
import { Home } from './src/screens/Home/Home';

export type RootStackParams = {
  Home: undefined;
  CityScreen: undefined;
  CityDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Home' component={Home} />
          <RootStack.Screen name='CityScreen' component={CityScreen} />
          <RootStack.Screen name='CityDetails' component={CityDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}
