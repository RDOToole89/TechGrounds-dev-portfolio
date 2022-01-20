import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { API_KEY } from '@env';
import { useEffect, useState } from 'react';

import { TopBar } from './src/components/TopBar/TopBar';
import { SearchBar } from './src/components/SearchBar/SearchBar';

import { fontSizes, spacing } from './src/constants/sizes';
import { CityScreen } from './src/screens/CityScreen/CityScreen';
import { WeatherData } from './src/types/app';
import { LinearGradient } from 'expo-linear-gradient';
import { buildCurrentWeatherUrl } from './src/services/weatherApi';
import { Footer } from './src/components/FooterBar/FooterBar';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [viewCentered, setViewCentered] = useState<Boolean>(true);
  const [tempHigh, setTempHigh] = useState<Boolean>(false);
  const API_URL = buildCurrentWeatherUrl(city, API_KEY, 'metric');

  const onChangeSearch = (userInput: string): void => {
    setSearchInput(userInput);
  };

  const onClickSetCity = (): void => {
    setCity(searchInput);
  };

  const resetCity = (): void => {
    setCity('');
    setSearchInput('');
  };

  const handleTempGradient = (bool: Boolean): void => {
    setTempHigh(bool);
  };

  useEffect(() => {
    console.log('Mounted APP!');

    if (city) {
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
    }
  }, [city]);

  return (
    <>
      <TopBar />
      <View
        style={[
          styles.container,
          viewCentered ? { alignItems: 'center' } : { alignItems: 'stretch' },
        ]}>
        <LinearGradient
          colors={!tempHigh ? ['#3286a7', '#b1dae1', '#d8eeee'] : ['#f83600', '#f98712', '#f9d423']}
          style={styles.background}
        />

        {!city ? (
          <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image style={styles.mainImage} source={require('./assets/cloud-sun.png')} />
            </View>
            <SearchBar
              searchInput={searchInput}
              onChangeSearch={onChangeSearch}
              onClickSetCity={onClickSetCity}
            />
          </>
        ) : (
          <CityScreen
            weatherData={weatherData}
            resetCity={resetCity}
            handleTempGradient={handleTempGradient}
          />
        )}
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: '#BAE6FD',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  mainImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
