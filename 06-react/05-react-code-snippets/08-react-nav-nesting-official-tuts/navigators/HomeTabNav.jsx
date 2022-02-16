import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import { MessagesScreen } from '../screens/MessagesScreen';

const Tab = createBottomTabNavigator();

export const HomeTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={FeedScreen} />
      <Tab.Screen name='Messages' component={MessagesScreen} />
    </Tab.Navigator>
  );
};
