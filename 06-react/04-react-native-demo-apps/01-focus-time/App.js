import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';

import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
// import Constants from 'expo-constants';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('something');
  // console.log(Constants);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      {/* <Text style={{ color: '#fff' }}>{focusSubject}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
});
