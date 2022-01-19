import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { spacing } from '../../constants/sizes';
import { SearchBarInterface } from './searchbar';

export const SearchBar = ({ searchInput, onChangeSearch, onClickSetCity }: SearchBarInterface) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => onChangeSearch(userInput)}
        value={searchInput}
        placeholder='Enter a City'
        style={styles.searchInput}
      />
      <SubmitButton size={40} onClickSetCity={onClickSetCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: spacing.sm,
    paddingLeft: spacing.xxl,
    paddingRight: spacing.md,
    backgroundColor: 'hsla(200, 51%, 41%, .5)',
    marginBottom: 200,
  },

  searchInput: {
    padding: spacing.md,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 1,
  },
});
