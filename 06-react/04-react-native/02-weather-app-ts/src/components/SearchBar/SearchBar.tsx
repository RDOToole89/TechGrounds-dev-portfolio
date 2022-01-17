import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { spacing } from '../../utils/sizes';

interface SearchBar {
  searchInput: string;
  onChangeSearch(userInput: string): void;
  onClickSetCity(): void;
}

export const SearchBar = ({ searchInput, onChangeSearch, onClickSetCity }: SearchBar) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => onChangeSearch(userInput)}
        value={searchInput}
        style={styles.searchInput}
        placeholder='enter a city'
      />
      <SubmitButton title='+' size={40} onClickSetCity={onClickSetCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: spacing.md,
  },

  searchInput: {
    flex: 1,
    padding: spacing.md,
    borderWidth: 1,
    marginRight: spacing.lg,
  },
});
