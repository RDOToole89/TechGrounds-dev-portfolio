import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orangered',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: true,
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name='md-home-outline' size={32} color='orangered' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name='person-outline' size={32} color='orangered' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Details'
        component={DetailsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name='information' size={32} color='orangered' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
