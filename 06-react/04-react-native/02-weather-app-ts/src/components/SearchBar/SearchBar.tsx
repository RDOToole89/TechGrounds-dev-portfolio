import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { spacing } from '../../utils/sizes';
import { SearchBarInterface } from './searchbar';

export const SearchBar = ({ searchInput, onChangeSearch, onClickSetCity }: SearchBarInterface) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => onChangeSearch(userInput)}
        value={searchInput}
        style={styles.searchInput}
        placeholder='enter a city'
      />
      <SubmitButton size={40} onClickSetCity={onClickSetCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  searchInput: {
    flex: 1,
    padding: spacing.md,
    borderWidth: 1,
    marginRight: spacing.lg,
  },
});
