import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { spacing } from '../../constants/sizes';
import { ISearchBar } from './searchbar';
import { fonts } from '../../constants/fonts';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Colors } from '../../constants/colors';

export const SearchBar = ({
  searchInput,
  handleSearchOnChange,
  onClickSetCity,
}: ISearchBar) => {
  const { dark } = useContext(DarkModeContext);

  return (
    <View style={styles(dark).inputContainer}>
      <TextInput
        onChangeText={(userInput) => handleSearchOnChange(userInput)}
        value={searchInput}
        placeholder='Enter a City'
        style={styles(dark).searchInput}
      />
      <SubmitButton size={40} onClickSetCity={onClickSetCity} />
    </View>
  );
};

const styles = (darkMode: boolean = false) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: spacing.sm,
      paddingLeft: spacing.xxl,
      backgroundColor: darkMode
        ? 'hsla(0, 0%,100%, .7)'
        : 'hsla(200, 51%, 41%, .5)',
      marginBottom: 200,
    },

    searchInput: {
      width: '80%',
      fontFamily: fonts.ubuntu,
      padding: spacing.sm,
      color: darkMode ? Colors.primaryBlack : Colors.primaryWhite,
      fontWeight: '600',
      letterSpacing: 1,
    },
  });
