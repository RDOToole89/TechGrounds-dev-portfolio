import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';

interface SubmitButton {
  style?: {};
  textStyle?: {};
  size: number;
  title?: string;
  onClickSetCity(): void;
}

export const SubmitButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: SubmitButton) => {
  return (
    <TouchableOpacity style={[styles(size).submitBtn, style]} onPress={props.onClickSetCity}>
      <Text style={[styles(size).submitText, textStyle]}>{props.title}</Text>
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
