import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';
import Icon from 'react-native-vector-icons/Ionicons';
import { SubmitButtonInterface } from './submitbutton';

export const SubmitButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: SubmitButtonInterface) => {
  return (
    <TouchableOpacity style={[styles(size).submitBtn, style]} onPress={props.onClickSetCity}>
      <Icon name='search-outline' size={20} color='#000' />
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    submitBtn: {
      borderRadius: size / 6,
      padding: spacing.md,
      borderWidth: 1,
    },
    submitText: {
      color: '#000',
    },
  });
