import { Text, View, Button } from 'react-native';
import { Br } from './DetailsScreen';

export const PassParamsScreen = ({ navigation, route }) => {
  console.log('ROUTE OBJECT', route);
  const { id, name, msg } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Passing Params Screen</Text>
      <Text
        style={{ backgroundColor: 'rgba(0,0,0,.2)', padding: 10, margin: 20 }}>
        route params: `${JSON.stringify(route.params)}`
      </Text>
      <Text>ID: ${id}</Text>
      <Text>name: ${name}</Text>
      <Text>msg: ${msg}</Text>
      <Br />
      <Button title='Go back to home' onPress={() => navigation.goBack()} />
      <Br />
      <Button
        title='Go to Params Screen... again'
        onPress={() =>
          navigation.push('ParamScreen', {
            id: Math.floor(Math.random() * 100),
            name: 'Roibin',
            msg: 'I am passing params',
          })
        }
      />
      <Br />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Br />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};
