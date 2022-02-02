import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const half = false;
  const squares = false;
  const grid = true;

  return (
    <>
      {half && (
        <>
          <View style={{ backgroundColor: '#7cb48f', flex: 1 }} />
          <View style={{ backgroundColor: '#7ca1B4', flex: 2 }} />
        </>
      )}
      {squares && (
        <View style={styles.container}>
          <View style={styles.square} />
          <View style={[styles.square, { alignSelf: 'end' }]} />
          <View style={[styles.square, { backgroundColor: 'orangered' }]} />
        </View>
      )}
      {grid && (
        <View
          style={{
            backgroundColor: '#7ca1B4',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.square}>
              <Text>A</Text>
            </View>
            <View style={[styles.square]}>B</View>
            <View style={[styles.square]}>C</View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.square}>D</View>
            <View style={[styles.square]}>E</View>
            <View style={[styles.square]}>F</View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.square}>G</View>
            <View style={[styles.square]}>H</View>
            <View style={[styles.square]}>I</View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7Ca1B4',
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
  grid: {},

  defaults: {
    // Web Defaults
    // display: 'flex',
    // flexDirection: 'row',
    // alignContent: 'stretch',
    // flexShrink: 1,
    // React Native Defaults
    // These are unnecessary
    // display: 'flex',
    // flexDirection: 'column',
    // alignContent: 'flex-start',
    // flexShrink: 0,
  },
});
