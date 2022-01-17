import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { SearchBar } from './src/features/SearchBar';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>({});
  const API_URL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const onChangeSearch = (userInput: string) => {
    setSearchInput(userInput);
  };

  const onClickSetCity = (): void => {
    setCity(searchInput);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      {!city ? (
        <SearchBar
          searchInput={searchInput}
          onChangeSearch={onChangeSearch}
          onClickSetCity={onClickSetCity}
        />
      ) : (
        <Text>'Weather Forecast'</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: spacing.lg,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
