import { createStackNavigator } from '@react-navigation/stack';

import { Image, Button } from 'react-native';
import { LogoHeaderScreen } from '../screens/LogoHeaderScreen';

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
        component={LogoHeaderScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title='Info'
              color='red'
            />
          ),
        }}
      />
    </LogoStack.Navigator>
  );
};

// You might be wondering, why headerTitle when we provide a component and not title, like before? The reason is that headerTitle is a property that is specific to a native stack navigator, the headerTitle defaults to a Text component that displays the title.
