import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
// import Constants from 'expo-constants';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  // console.log(Constants);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where Im going to build a timer </Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text style={{ color: '#fff' }}>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
