import { TouchableOpacity, StyleSheet } from 'react-native';
import { spacing } from '../../constants/sizes';
import Icon from 'react-native-vector-icons/Ionicons';
import { ISubmitButton } from './submitbutton';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Colors } from '../../constants/colors';

export const SubmitButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: ISubmitButton) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <TouchableOpacity
      style={[styles(size).submitBtn, style]}
      onPress={props.onClickSetCity}>
      <Icon
        name='search-outline'
        size={20}
        color={dark ? Colors.primaryBlack : Colors.primaryWhite}
      />
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
      color: Colors.primaryBlack,
    },
  });
