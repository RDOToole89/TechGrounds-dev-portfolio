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
      <Icon name='search-outline' size={20} color='#fff' />
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    submitBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.sm,
    },
    submitText: {
      color: '#000',
    },
  });
