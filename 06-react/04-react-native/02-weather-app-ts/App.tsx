import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { SearchBar } from './src/components/SearchBar/SearchBar';
import { spacing } from './src/utils/sizes';
import { CityScreen } from './src/screens/CityScreen/CityScreen';
import { WeatherData } from './src/types/app';
import { LinearGradient } from 'expo-linear-gradient';
import { buildCurrentWeatherUrl } from './src/services/weatherApi';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('amsterdam');
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const API_URL = buildCurrentWeatherUrl(city, API_KEY, 'metric');

  const onChangeSearch = (userInput: string) => {
    setSearchInput(userInput);
  };

  const onClickSetCity = (): void => {
    setCity(searchInput);
  };

  const resetCity = (): void => {
    setCity('');
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
      <LinearGradient
        // Background Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.background}
      />

      {!city ? (
        <SearchBar
          searchInput={searchInput}
          onChangeSearch={onChangeSearch}
          onClickSetCity={onClickSetCity}
        />
      ) : (
        <CityScreen weatherData={weatherData} resetCity={resetCity} />
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
