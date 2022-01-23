import { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { API_KEY } from '@env';

import { TopBar } from './src/components/TopBar/TopBar';
import { SearchBar } from './src/components/SearchBar/SearchBar';
import { Footer } from './src/components/FooterBar/FooterBar';

import { CityScreen } from './src/screens/CityScreen/CityScreen';

import { WeatherData } from './src/types/app';
import { spacing } from './src/constants/sizes';
import { buildCurrentWeatherUrl } from './src/services/weatherApi';

import { LinearGradient } from 'expo-linear-gradient';

import { ErrorMessage } from './src/components/ErrorMessage/ErrorMessage';
import { DarkModeProvider } from './src/context/DarkModeContext';

export default function App() {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<Boolean>(false);
  const [gradient, setGradient] = useState(['#3286a7', '#b1dae1', '#d8eeee']);
  const API_URL = buildCurrentWeatherUrl(city, API_KEY, 'metric');

  const handleTempGradient = (temperature: number) => {
    if (temperature >= -30) setGradient(['#44b5fe', '#37f1fe', '#9bf8ff']);
    if (temperature >= -10) setGradient(['#a4c7fd', '#b1d6fc', '#c1e7fb']);
    if (temperature >= 0) setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
    if (temperature >= 7) setGradient(['#4792b0', '#6ca8c0', '#5dbf99']);
    if (temperature >= 12) setGradient(['#6ca8c0', '#d0e9ed', '#fde4a5']);
    if (temperature >= 18) setGradient(['#fcd34d', '#FCD34D', '#fcdd8e']);
    if (temperature >= 28) setGradient(['#a33232', '#f9ba1d', '#fadd4f']);
  };

  const handleSearchOnChange = (userInput: string): void => {
    setSearchInput(userInput);
  };

  const onClickSetCity = (): void => {
    setCity(searchInput);
  };

  const resetCity = (): void => {
    setCity('');
    setSearchInput('');
  };

  const handleErrorOnClick = (): void => {
    setError(!error);
  };

  const activateCityDetails = () => {
    setCityDetailsActive(true);
  };

  const goBackToHomeScreen = () => {
    resetCity();
    setCityDetailsActive(false);
    setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
  };

  useEffect(() => {
    setWeatherData(null);

    if (city) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();

          if (response.status !== 200) {
            console.log(`${data.cod} ERROR ${data.message}`);
            setError(true);
            return;
          }

          setWeatherData(data);
          setError(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchWeatherData();
    }
  }, [city]);

  return (
    <>
      <DarkModeProvider>
        <TopBar goBackToHomeScreen={goBackToHomeScreen} />
        <View style={[styles.container, { alignItems: 'center' }]}>
          {error && (
            <ErrorMessage
              errorColor='hsla(0,72.2%,50.6%, .8)'
              handleErrorOnClick={handleErrorOnClick}
            />
          )}
          <LinearGradient colors={gradient} style={styles.background} />

          {!city || !weatherData ? (
            <>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image style={styles.mainImage} source={require('./assets/cloud-sun.png')} />
              </View>
              <SearchBar
                searchInput={searchInput}
                handleSearchOnChange={handleSearchOnChange}
                onClickSetCity={onClickSetCity}
              />
            </>
          ) : (
            <CityScreen
              weatherData={weatherData}
              handleTempGradient={handleTempGradient}
              cityDetailsActive={cityDetailsActive}
              activateCityDetails={activateCityDetails}
              goBackToHomeScreen={goBackToHomeScreen}
            />
          )}
        </View>
        <Footer />
      </DarkModeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    backgroundColor: '#BAE6FD',
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
