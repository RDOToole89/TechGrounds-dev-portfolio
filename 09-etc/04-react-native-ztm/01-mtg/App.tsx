import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingVertical: 42 }}>
        <View
          style={{
            backgroundColor: 'green',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 16,
          }}>
          {/* <Text>Our react app</Text> */}
          <Text>Our react app</Text>
          <Text>Our react app</Text>
          <Text>Our react app</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
