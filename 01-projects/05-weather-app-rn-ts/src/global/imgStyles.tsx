import { StyleSheet } from 'react-native';
import { spacing } from '../constants/sizes';

export const imgStyles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
  smallLogo: {
    width: 100,
    height: 100,
  },
  mediumImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: spacing.lg,
  },
  smallImage: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
