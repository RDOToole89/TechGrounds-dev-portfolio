import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { MemoizedPropsScreen } from './screens/PropsScreen';
import { MoviesScreen } from './screens/MoviesScreen';
import { MovieViewsRealtime } from './screens/MoviesViewsRealTimeScreen';
import { useEffect, useState } from 'react';
import { PassParamsScreen } from './screens/PassParamsScreen';
import { CreatePostScreen } from './screens/CreatePostScreen';
import { LoginStack } from './navigation/AuthNavigator';
import { LogoTrialStack } from './navigation/LogoExampleStack';

// https://reactnavigation.org/docs/native-stack-navigator/#options
const Stack = createNativeStackNavigator();

export default function App() {
  let movieData = { title: 'Heat', releaseDate: 'December 15, 1995' };
  const [views, setViews] = useState(0);

  const someData = {
    name: 'Roibin',
    lastname: 'OToole',
  };

  // *** TURN ON TO SEE THE EFFECTS OF MEMOIZING THE MOVIE COMPONENT ***
  // useEffect(() => {
  //   setInterval(() => {
  //     setViews(Math.random());
  //   }, 3000);
  // }, [views]);

  return (
    <NavigationContainer>
      {/* If we want to specify the same options for all screen in the navigator we can pass 
        screenOptions*/}
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ title: 'NavTitle from screenOptions' }}>
        {/* Screen component accepts a name and a component */}
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Overview' }}
          initialParams={{ someText: 'Route Title passed from stack' }}
        />

        {/* STACK => nested navigator */}
        <Stack.Screen name='Auth' component={LoginStack} />
        {/* STACK => nested navigator */}
        <Stack.Screen name='Logo' component={LogoTrialStack} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='PropsPassed'>
          {(props) => <MemoizedPropsScreen {...props} extraData={someData} />}
        </Stack.Screen>
        {/* Movies & MoviesViewRT screens provide more info on memoization in react */}
        <Stack.Screen name='Movies' component={MoviesScreen} />
        <Stack.Screen name='MoviesRT'>
          {(props) => (
            <MovieViewsRealtime
              {...props}
              views={views}
              movieData={movieData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name='ParamScreen'
          component={PassParamsScreen}
          // You can set initial params on a screen with the initialParams prop
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name='CreatePost' component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Use React context and wrap the navigator with a context provider to pass data to the screens (recommended).
//Use a render callback for the screen instead of specifying a component prop:

// To research: setParams , setOptions
// https://reactnavigation.org/docs/navigation-prop/#setparams
// https://reactnavigation.org/docs/navigation-prop/#setoptions
