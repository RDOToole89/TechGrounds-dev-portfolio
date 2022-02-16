import { useRef, useState } from 'react';
import { Text, View, Button } from 'react-native';

export const Br = () => {
  return <View style={{ marginVertical: 5 }}></View>;
};

export const DetailsScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handlePush = () => {
    navigation.push('Details');
    setCount(count + 1);
    console.log(countRef);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>useState count: {count}</Text>
      <Text ref={countRef}>CountRef: {countRef.current.value}</Text>
      <Br />
      <Button
        title='Go to Details... again with .navigate'
        onPress={() => navigation.navigate('Details')}
      />
      <Br />
      <Button title='Go to Details... again with .push' onPress={handlePush} />
      <Br />
      <Button title='increment' onPress={() => setCount(count + 1)} />
      <Br />
      <Button
        title="Go to Home by using navigate('Home')"
        onPress={() => navigation.navigate('Home')}
      />
      <Br />
      <Button
        title='Go back with the .goBack() function'
        onPress={() => navigation.goBack()}
      />
      <Br />
      <Button
        title='Go back with the .popToTop() function'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
