import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { API_KEY } from '@env';

import { TopBar } from '../../components/TopBar/TopBar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Footer } from '../../components/FooterBar/FooterBar';

import { CityScreen } from '../../screens/CityScreen/CityScreen';

import { WeatherData } from '../../types/app';
import { spacing } from '../../constants/sizes';
import { buildCurrentWeatherUrl } from '../../services/weatherApi';

import { LinearGradient } from 'expo-linear-gradient';
import { useKeyboard } from '@react-native-community/hooks';

import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { DarkModeContext } from '../../context/DarkModeContext';
import useFetch from '../../hooks/useFetch';
import { Colors } from '../../constants/colors';

export const Home = ({}) => {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('detroit');

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorToggle, setErrorToggle] = useState<Boolean>(false);

  // default background gradient
  const [gradient, setGradient] = useState(['#3286a7', '#b1dae1', '#d8eeee']);

  // darkmode context
  const { dark } = useContext(DarkModeContext);
  const keyboard = useKeyboard();

  // function which sets the background gradient based on the temperature in
  // the city query.
  const handleTempGradient = (temperature: number) => {
    if (temperature >= -30) setGradient(['#44b5fe', '#37f1fe', '#9bf8ff']);
    if (temperature >= -10) setGradient(['#a4c7fd', '#b1d6fc', '#c1e7fb']);
    if (temperature >= 0) setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
    if (temperature >= 7) setGradient(['#4792b0', '#6ca8c0', '#5dbf99']);
    if (temperature >= 12) setGradient(['#6ca8c0', '#d0e9ed', '#fde4a5']);
    if (temperature >= 18) setGradient(['#fde4a5', '#FCD34D', '#fcdd8e']);
    if (temperature >= 28) setGradient(['#fcdd8e', '#FCD34D', '#a33232']);
  };

  // Handler functions

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
    setErrorToggle(!errorToggle);
  };

  const activateCityDetails = () => {
    setCityDetailsActive(true);
  };

  // Function which resets the app to default state
  const goBackToHomeScreen = () => {
    resetCity();
    setCityDetailsActive(false);
    setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
  };

  // If a city query has been entered create the API_URL
  const API_URL = !city
    ? null
    : buildCurrentWeatherUrl(city, API_KEY, 'metric');

  // Custom fetching logic
  const { data, loading } = useFetch(API_URL);
  // console.log(data);

  useEffect(() => {
    // Check if the query was valid if not show error
    if (data?.message) setErrorToggle(true);

    // If the the request was succesfull set the weather state
    if (city && !data?.message) {
      setWeatherData(data);
    }
  }, [data]);

  return (
    <>
      <TopBar goBackToHomeScreen={goBackToHomeScreen} />
      <View
        style={[
          styles.container,
          {
            alignItems: 'center',
            paddingTop: keyboard.keyboardShown ? spacing.md : 0,
          },
        ]}>
        {errorToggle && (
          <ErrorMessage
            errorColor='hsla(0,72.2%,50.6%, .8)'
            handleErrorOnClick={handleErrorOnClick}
          />
        )}
        <LinearGradient colors={gradient} style={styles.background} />
        {dark && (
          <LinearGradient
            colors={['rgba(0,0,0, 0.1)', 'rgba(0,0,0, 0.1)', 'rgba(0,0,0,0.1)']}
            style={[styles.background, { zIndex: 0 }]}
          />
        )}

        {!city || !weatherData ? (
          <>
            <View style={[styles.imageWrapper]}>
              <Image
                style={styles.mainImage}
                source={require('../../../assets/cloud-sun.png')}
              />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    backgroundColor: Colors.backgroundBlue,
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  mainImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: spacing.lg,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
