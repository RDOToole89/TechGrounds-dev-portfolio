// example from: https://www.youtube.com/watch?v=yz9E10Dq8Bg

import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
const SIZE = 100.0;

// TS
// const handleRotation = (progress: Animated.SharedValue<number>) => {
// We need to specify that this is a worklet Reanimated function
const handleRotation = (progress) => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
};

export default function App() {
  // the are shared properties that can be used to animate RN views
  // its values van be what ever boolean, numers or an entire object
  const progress = useSharedValue(1); // can be whatever value
  const scale = useSharedValue(2);

  // in order to animate a view we need to created kind of like a
  // react native animations styleSheet which we can add to our animated view
  const reaninmatedStyle = useAnimatedStyle(() => {
    return {
      // these are the shared properties we defined earlier
      // shared properties can be used for MULTIPLE animations
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: handleRotation(progress) },
        // { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  // in combination with useEffect and the withTiming function from the reanimated
  // library we can change the sharedValues over a time duration using the
  // withTiming function from the reanimated library.

  useEffect(() => {
    // progress.value = withTiming(0.5, { duration: 3000 });
    // by putting repeat on -1 it will repeat infinitely
    // progress.value = withRepeat(withSpring(0.5), -1, true);
    progress.value = withRepeat(withSpring(0.5), 3, true);
    // scale.value = withTiming(2, { duration: 3000 });

    // with spring is more powerful than withTiming and is based on a spring animation
    // meaning its not based on a duration or timing. It's based on physics of the object
    // itself, the mass, damping and stiffness of the object. I uses a default configuration
    // value which is often a good solution.

    // by applying the reverse boolean we go from start to end and from end to start with animations
    // making it look more fluid
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: 'blue' },
          // here wer add the reanimated stylesheet!
          reaninmatedStyle,
        ]}
      />
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
