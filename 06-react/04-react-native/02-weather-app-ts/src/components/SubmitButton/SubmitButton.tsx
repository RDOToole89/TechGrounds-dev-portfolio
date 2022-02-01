import { TouchableOpacity, StyleSheet } from 'react-native';
import { spacing } from '../../constants/sizes';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Colors } from '../../constants/colors';

export interface ISubmitButton {
  handleOnClickSetCity(): void;
}

export const SubmitButton = ({ handleOnClickSetCity }: ISubmitButton) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleOnClickSetCity}>
      <Icon
        name='search-outline'
        size={25}
        color={dark ? Colors.primaryBlack : Colors.primaryWhite}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.sm,
  },
  submitText: {
    color: Colors.primaryBlack,
  },
});
