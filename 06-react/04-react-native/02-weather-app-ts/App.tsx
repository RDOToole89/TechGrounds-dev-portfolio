import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>Hello World</Text>
    </View>
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
