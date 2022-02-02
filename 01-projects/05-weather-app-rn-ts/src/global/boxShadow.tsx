import { StyleSheet } from 'react-native';
import { generateBoxShadowStyle } from '../utils/boxShadow';

export const boxShadowStyles = StyleSheet.create({
  boxShadow: generateBoxShadowStyle(
    0,
    2,
    'hsla(200, 100%, 10%, 0.2)',
    0.27,
    4.65,
    1,
    'hsla(200, 100%, 10%, 0.2)'
  ),
});
