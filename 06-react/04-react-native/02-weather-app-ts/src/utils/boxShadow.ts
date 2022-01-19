import { Platform } from 'react-native';

interface GenerateBoxShadowStyles {
  boxShadow: {
    shadowColor?: string | null;
    shadowOffset?: { width?: number; height?: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  };
}

const generateBoxShadowStyle = (
  xOffset?: number,
  yOffset?: number,
  shadowColorIos?: string,
  shadowOpacity?: number,
  shadowRadius?: number,
  elevation?: number,
  shadowColorAndroid?: string
) => {
  const styles: GenerateBoxShadowStyles = { boxShadow: { shadowColor: null } };

  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }

  return styles;
};
