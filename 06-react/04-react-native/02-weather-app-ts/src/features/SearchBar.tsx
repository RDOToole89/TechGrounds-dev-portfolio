import { View, Text, TextInput, StyleSheet } from 'react-native';
import { spacing } from '../utils/sizes';

interface SearchBar {
  searchInput: string;
  onChangeSearch(userInput: string): void;
}

export const SearchBar = ({ searchInput, onChangeSearch }: SearchBar) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => onChangeSearch(userInput)}
        value={searchInput}
        style={styles.searchInput}
        placeholder='enter a city'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.md,
  },

  searchInput: {
    flex: 1,
    padding: spacing.md,
    borderWidth: 1,
  },
});
