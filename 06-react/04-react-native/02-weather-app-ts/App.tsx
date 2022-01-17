import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { SearchBar } from './src/components/SearchBar/SearchBar';
import { spacing } from './src/utils/sizes';
import { CityScreen } from './src/screens/CityScreen';
import { WeatherData } from './src/types/app';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('amsterdam');
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

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
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <View style={styles.container}>
      {!city ? (
        <SearchBar
          searchInput={searchInput}
          onChangeSearch={onChangeSearch}
          onClickSetCity={onClickSetCity}
        />
      ) : (
        <CityScreen weatherData={weatherData} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: spacing.lg,
    backgroundColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
