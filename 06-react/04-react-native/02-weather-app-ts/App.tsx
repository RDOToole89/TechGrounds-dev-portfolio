import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env';
import { useState } from 'react';
import { SearchBar } from './src/features/SearchBar';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const onChangeSearch = (userInput: string) => {
    setSearchInput(userInput);
  };

  return (
    <View style={styles.container}>
      {!city ? (
        <SearchBar searchInput={searchInput} onChangeSearch={onChangeSearch} />
      ) : (
        <Text>'Weather Forecast'</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
