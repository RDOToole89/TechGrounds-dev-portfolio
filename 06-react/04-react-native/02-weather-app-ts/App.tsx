import { StyleSheet, View, Image, Text } from 'react-native';
import { API_KEY } from '@env';
import { useCallback, useEffect, useState } from 'react';

import { TopBar } from './src/components/TopBar/TopBar';
import { SearchBar } from './src/components/SearchBar/SearchBar';

import { spacing } from './src/constants/sizes';
import { CityScreen } from './src/screens/CityScreen/CityScreen';
import { WeatherData } from './src/types/app';
import { LinearGradient } from 'expo-linear-gradient';
import { buildCurrentWeatherUrl } from './src/services/weatherApi';
import { Footer } from './src/components/FooterBar/FooterBar';
import { ErrorMessage } from './src/components/ErrorMessage/ErrorMessage';

export default function App() {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [tempHigh, setTempHigh] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const API_URL = buildCurrentWeatherUrl(city, API_KEY, 'metric');

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
  };

  let tempGradient = tempHigh
    ? ['#f98712', '#f9ba1d', '#f9d423']
    : ['#3286a7', '#b1dae1', '#d8eeee'];

  const handleTempGradient = useCallback(
    (bool: Boolean) => {
      setTempHigh(bool);
    },
    [tempHigh]
  );

  useEffect(() => {
    setWeatherData(null);

    if (city) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          // console.log(response);

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
      <TopBar goBackToHomeScreen={goBackToHomeScreen} />
      <View style={[styles.container, { alignItems: 'center' }]}>
        {error && (
          <ErrorMessage
            errorColor='hsla(0,72.2%,50.6%, .8)'
            handleErrorOnClick={handleErrorOnClick}
          />
        )}
        <LinearGradient colors={tempGradient} style={styles.background} />

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
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
