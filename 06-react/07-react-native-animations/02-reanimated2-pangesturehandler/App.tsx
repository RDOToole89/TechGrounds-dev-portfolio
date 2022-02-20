import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { useEffect } from 'react';

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

// ContextInterface => needs to be a type for some reason
type ContextInterface = {
  translateX: number;
  translateY: number;
};

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Remote debugger']);
  }, []);

  // Shared values to translate X and Y
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // needs to be inseted into the pangesture handler and essentially
  // tracks the logic behind the event
  const panGestureEvent =
    // Hook provided by Reanimated to create GestureHandlerEvents
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextInterface>({
      // on order to to remember the previus state with store the context of the event
      // the context is just an object that holds the starting state or value
      // and updates as the event occurs.
      onStart: (event, context) => {
        context.translateX = translateX.value;
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        // by adding the previous state to the even.translation we get a fluid
        // animation
        translateX.value = event.translationX + context.translateX;
        translateY.value = event.translationY + context.translateY;
        // console.log(event.translationX);
      },
      onEnd: () => {
        // the onEnd callback defines what happens when the gesture is released
        // because with spring is defined is wrapping the default value we will
        // have a nice spring animation when it returns to its starting position.

        // if our distance is bigger than the circle radius we want the box to
        // stay outside the circle

        // https://www.calculatorsoup.com/calculators/geometry-plane/distance-two-points.php
        // d = √(x2−x1)^2 +(y2−y1)^2
        const distance = Math.sqrt(
          translateX.value ** 2 + translateY.value ** 2
        );

        // To solve the edge case of the square being half over the border we add + SIZE / 2
        // if (distance < CIRCLE_RADIUS) {
        if (distance < CIRCLE_RADIUS + SIZE / 2) {
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
        }
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.circle]}>
        {/* Only Animated views should be inside the PanGestureHandler */}
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
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
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    // backgroundColor: 'red',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0,0, 256, 0.5)',
  },
});
