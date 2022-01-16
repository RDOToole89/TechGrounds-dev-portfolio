import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Focus() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphText}>What would you like to focus on?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  paragraphText: {
    color: '#fff',
  },
});
