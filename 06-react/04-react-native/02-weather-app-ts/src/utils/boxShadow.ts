import { Platform } from 'react-native';

interface ShadowStylesInterface {
  shadowColor: string;
  shadowOffset?: { width?: number; height?: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}

export const generateBoxShadowStyle = (
  xOffset: number = 0,
  yOffset: number = 2,
  shadowColorIos: string = '#000',
  shadowOpacity: number = 0.23,
  shadowRadius: number = 2.62,
  elevation: number = 4,
  shadowColorAndroid: string = '#000'
) => {
  let styles = {
    shadowColor: shadowColorAndroid,
    shadowOffset: { width: xOffset, height: yOffset },
    shadowOpacity,
    shadowRadius,
    elevation,
  };

  if (Platform.OS === 'ios') {
    styles.shadowColor = shadowColorIos;
    styles.shadowOffset = { width: xOffset, height: yOffset };
    styles.shadowOpacity = shadowOpacity;
    styles.shadowRadius = shadowRadius;
  }

  if (Platform.OS === 'android') {
    styles.elevation = elevation;
    styles.shadowColor = shadowColorAndroid;
  }

  return styles;
};
